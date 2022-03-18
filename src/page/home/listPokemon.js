import React, { useEffect, useState } from "react"
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../graphql/queries";
import { Card, Owned, TitleCard, PositionTypeContainer, PositionType } from "./styled";
import { useNavigate } from 'react-router-dom'
import { detailPokemonVar } from "../../graphql/vars";

export default function ListPokemon(props) {
    const navigate = useNavigate()
    const { loading, data: datus } = useQuery(GET_POKEMON_DETAIL, {
        variables: {
            name: props?.data?.name
        }
    })
    const [own, setOwn] = useState(0)

    useEffect(() => {
        const myPoke = JSON.parse(`${localStorage.getItem('_cap_mypokemon')}`)
        let count = 0
        myPoke.forEach(e => {
            if (e?.pokemon?.name === props?.data?.name) {
                count += 1
            }
        });
        setOwn(count)
    }, [])

    if (loading) return <div></div>

    return (
        <Card onClick={() => {
            detailPokemonVar(datus)
            navigate(`/detailpokemon?name=${props?.data?.name}`, { state: datus })
        }}>
            <Owned>Owned : {own}</Owned>
            <img src={props?.data?.image} alt="" />
            <TitleCard>{props?.data?.name}</TitleCard>
            <PositionTypeContainer>
                {
                    datus?.pokemon?.types?.map((e, i) => {
                        return (
                            <PositionType key={i}>{e?.type?.name}</PositionType>
                        )
                    })
                }
            </PositionTypeContainer>
        </Card>
    )
}