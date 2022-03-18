import React, { useState } from "react";
import { Section, TitlePage, ContainerList, ContainerMyPoke, PositionType } from './styled'
import ListPokemon from "./listPokemon";
import { useNavigate } from "react-router-dom";

export default function MyPokemon() {
    const navigate = useNavigate()

    const [data, setData] = useState(JSON.parse(`${localStorage.getItem('_cap_mypokemon')}`))

    return (
        <div>
            {
                JSON.parse(`${localStorage.getItem('_cap_mypokemon')}`).length ?
                    <Section id="pokemonlist">
                        <TitlePage>
                            My Pokemon
                        </TitlePage>
                        <ContainerList>
                            {
                                data?.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <ListPokemon data={e} setData={setData} index={i} />
                                        </div>
                                    )
                                })
                            }
                        </ContainerList>
                    </Section> :
                    <ContainerMyPoke>
                        <div>you don't have pokemon</div>
                        <PositionType onClick={() => navigate('/')}>Find Pokemon</PositionType>
                    </ContainerMyPoke>
            }
        </div>
    );
}