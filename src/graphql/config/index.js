import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

import { offsetLimitPagination } from "@apollo/client/utilities";

export const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app/',
    cache: new InMemoryCache()
});