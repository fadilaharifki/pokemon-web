import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { Section, ShapeBackgorund, ContainerDetail, Desc, TitleBottom, CardDetail, PositionMoves, ContainerMove, PositionAbility, NumberChart, ContainerAbility, PositionTypeContainer, PositionType, CardBottom, TitleChart, ContainerChart, Bar, Bar2 } from './styled'

export default function DetailPokemon() {
    const { state } = useLocation();
    const navigate = useNavigate()
    console.log(state, 'state');

    const name = ["Hp", "Attack", "Defense", "Sp-Attack", "Sp-Defense", "Speed"]

    return (
        <Section>
            <ShapeBackgorund>
            </ShapeBackgorund>
            <ContainerDetail>
                <CardDetail>
                    <TitleBottom>{state.pokemon.name}</TitleBottom>
                    <ContainerAbility>
                        {
                            state?.pokemon?.types?.map((e, i) => {
                                return (
                                    <PositionType key={i}>{e.type.name}</PositionType>
                                )
                            })
                        }
                    </ContainerAbility>
                    <div>Weight : {state.pokemon.weight} kg</div>
                    <div>Height : {state.pokemon.height} m</div>
                </CardDetail>
            </ContainerDetail>
            <CardBottom>
                <Desc>
                    <TitleBottom>Statistic</TitleBottom>
                    {
                        state.pokemon.stats.map((e, i) => {
                            return (
                                <ContainerChart key={i}>
                                    <TitleChart>{name[i]}</TitleChart>
                                    <NumberChart>{e.base_stat}</NumberChart>
                                    <div>
                                        <Bar>
                                            <Bar2 size={e.base_stat}>
                                            </Bar2>
                                        </Bar>
                                    </div>
                                </ContainerChart>
                            )
                        })
                    }
                </Desc>

                <Desc>
                    <TitleBottom>Ability</TitleBottom>
                    <ContainerAbility >
                        {
                            state.pokemon.abilities.map((e, i) => {
                                return (
                                    <PositionAbility key={i}>
                                        {e.ability.name}
                                    </PositionAbility>
                                )
                            })
                        }
                    </ContainerAbility>
                </Desc>
                <Desc>
                    <TitleBottom>Moves</TitleBottom>
                    <ContainerMove >
                        {
                            state.pokemon.moves.map((e, i) => {
                                return (
                                    <PositionMoves key={i} href={`https://pokemondb.net/move/${e.move.name}`}>
                                        {e.move.name}
                                    </PositionMoves>
                                )
                            })
                        }
                    </ContainerMove>
                </Desc>
            </CardBottom>
        </Section>
    );
}