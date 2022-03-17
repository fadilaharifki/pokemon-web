import React, { useState } from "react"
import { GET_POKEMONS, GET_POKEMON_DETAIL } from "../../graphql/queries";
import { useQuery } from '@apollo/client'
import { Section } from './styled'
import ListPokemon from "./listPokemon";
import { ContainerList } from "./styled"
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)

    const { loading, data, fetchMore } = useQuery(GET_POKEMONS, {
        variables: {
            limit: 10,
            offset: 0
        }
    })

    const [isLoading, setIsLoading] = useState(false)

    const [item, setItem] = useState([])

    const loadMore = async () => {
        try {
            if (offset <= data.pokemons.count) {
                const response = await fetchMore({
                    variables: {
                        limit: limit + 10,
                        offset: offset + 10
                    }
                })

                setOffset(offset + 10)
                setLimit(limit + 10)
                if (item.length) {
                    setItem([...item, ...response?.data?.pokemons?.results])
                } else {
                    setItem([...response?.data?.pokemons?.results])
                }

            }
        } catch (error) {
            setIsLoading(true)
        }
    }

    if (loading) return <p>...Loading...</p>

    return (
        <Section id="pokemonlist">
            <ContainerList>
                {
                    data?.pokemons?.results.map((e, i) => {
                        return (
                            <div key={i}>
                                <ListPokemon data={e} />
                            </div>
                        )
                    })
                }
            </ContainerList>
            <InfiniteScroll
                dataLength={item.length}
                next={loadMore}
                hasMore={false}
                loader={<p>...Loading...</p>}
                onScroll={loadMore}
                scrollableTarget="pokemonlist"
            >
                <ContainerList>
                    {
                        item.map((e, i) => {
                            return (
                                <div key={i}>
                                    <ListPokemon data={e} />
                                </div>
                            )
                        })
                    }
                </ContainerList>
            </InfiniteScroll>
        </Section>
    )
}