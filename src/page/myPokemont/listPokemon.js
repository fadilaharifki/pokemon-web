import React from "react"
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../../graphql/queries";
import { ContainerCard, Card, TitleCard, TitleCard2, PositionTypeContainer, PositionType, BtnRelease } from "./styled";
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";

export default function ListPokemon(props) {
    const navigate = useNavigate()
    const { loading, data: datus } = useQuery(GET_POKEMON_DETAIL, {
        variables: {
            name: props.data.pokemon.name
        }
    })

    const release = () => {
        toast.success(`Release pokemon ${props.data.pokemon.nickname}`, { duration: 2000 });
        setTimeout(() => {
            const dataMyPokemon = JSON.parse(`${localStorage.getItem('_cap_mypokemon')}`)
            dataMyPokemon.splice(props.index, 1)
            localStorage.setItem('_cap_mypokemon', JSON.stringify(dataMyPokemon))
            props.setData(dataMyPokemon)
        }, 1000)
    }

    if (loading) return <div></div>

    return (
        <ContainerCard>
            <Toaster
                position="top-center"
            />
            <Card onClick={() => {
                navigate(`/detailpokemon?name=${props.data.pokemon.name}`, { state: datus })
            }}>
                <img src={props.data.pokemon.sprites.front_default} alt="" />
                <TitleCard>{props.data.pokemon?.nickname}</TitleCard>
                <TitleCard2>({props.data.pokemon?.name})</TitleCard2>
                <PositionTypeContainer>
                    {
                        props.data?.pokemon?.types?.map((e, i) => {
                            return (
                                <PositionType key={i}>{e.type.name}</PositionType>
                            )
                        })
                    }
                </PositionTypeContainer>
            </Card>
            <BtnRelease onClick={release}>Release</BtnRelease>
        </ContainerCard>
    )
}