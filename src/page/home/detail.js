import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { Section, ShapeBackgorund, ContainerDetail, Desc, BtnCatch, Img, TitleBottom, TitleDetail, CardDetail, PositionMoves, Input, ContainerMove, PositionAbility, NumberChart, ContainerAbility, PositionTypeContainer, PositionType, CardBottom, TitleChart, ContainerChart, Bar, Bar2 } from './styled'
import Swal from "sweetalert2";
import ModalComponent from "../../components/modal";
import { BASE_URL_ANIMATE } from "../../utils/URL";
import toast, { Toaster } from 'react-hot-toast';

export default function DetailPokemon() {
    const { state } = useLocation();
    const navigate = useNavigate()
    // console.log(state, 'state');
    const [open, setOpen] = useState(false);
    const [nickName, setNickName] = useState(state.pokemon.name);

    const name = ["Hp", "Attack", "Defense", "Sp-Attack", "Sp-Defense", "Speed"]

    const catchPokemon = () => {
        const probability = Math.floor(Math.random() * 100);

        toast.loading('Throwing ball!!!', {
            duration: 2000
        });
        setTimeout(() => {
            if (probability <= 50) {
                toast.error(`Yeaah, ${state.pokemon.name} run`, { duration: 2000 });
            } else {
                toast.success(`Wow, you catch ${state.pokemon.name}`, { duration: 2000 });
                setOpen(true)
            }
        }, 2000)
    }

    const Nickname = (e) => {
        setNickName(e.target.value)

    }

    const submit = () => {
        if (localStorage.getItem("_cap_mypokemon")) {
            const data = JSON.parse(`${localStorage.getItem("_cap_mypokemon")}`)
            const obj = { ...state }
            obj.pokemon.nickname = nickName

            data.push(obj)

            localStorage.setItem("_cap_mypokemon", JSON.stringify(data))

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Hooray!, your pokemon already is a bag.',
                showConfirmButton: false,
                timer: 1500
            })
            setOpen(false)

        } else {
            const obj = { ...state }
            obj.pokemon.nickname = nickName

            localStorage.setItem("_cap_mypokemon", JSON.stringify([obj]))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Hooray!, your pokemon already is a bag.',
                showConfirmButton: false,
                timer: 1500
            })
            setOpen(false)
        }
    }

    return (
        <Section>
            <Toaster
                position="top-center"
            />
            <ShapeBackgorund>
            </ShapeBackgorund>
            <ContainerDetail>
                <CardDetail>
                    <div>
                        <TitleDetail>{state.pokemon.name}</TitleDetail>
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
                        <BtnCatch onClick={catchPokemon}>Catch!</BtnCatch>
                    </div>
                    <Img src={`${BASE_URL_ANIMATE}/${state.pokemon.id}.gif`} />
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
            <ModalComponent open={open} setOpen={setOpen} title={"Nickname"}>
                <Input value={nickName} onChange={Nickname} placeholder="Input Nickname" type="text" />
                <BtnCatch onClick={submit}>Submit</BtnCatch>
            </ModalComponent>
        </Section>
    );
}