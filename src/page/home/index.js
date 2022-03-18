import React, { useState } from "react"
import { GET_POKEMONS } from "../../graphql/queries";
import { useQuery } from '@apollo/client'
import { Section } from './styled'
import ListPokemon from "./listPokemon";
import { ContainerList, Input, ContainerSearch } from "./styled"
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
    const [search, setSearch] = useState()
    const [suggest, setSuggest] = useState([])

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

    const handleSearch = (e) => {
        const dataPokemon = [...data.pokemons.results, ...item]
        let suggestion = []
        if (e.target.value.length > 0) {
            suggestion = dataPokemon.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
        }

        setSearch(e.target.value)
        setSuggest(suggestion);
    }

    if (loading) return <p>...Loading...</p>

    return (
        <Section id="pokemonlist">
            <ContainerSearch>
                <Input onChange={handleSearch} placeholder="Search pokemon" type="text" />
            </ContainerSearch>
            {
                suggest.length > 0 && (
                    <ContainerList>
                        {
                            suggest.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <ListPokemon data={e} />
                                    </div>
                                )
                            })
                        }
                    </ContainerList>
                )
            }
            {
                search && suggest.length === 0 && (
                    <ContainerSearch>
                        {search} not found!!!
                    </ContainerSearch>
                )
            }
            {
                !search && (
                    <>
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
                    </>
                )
            }
        </Section>
    )
}