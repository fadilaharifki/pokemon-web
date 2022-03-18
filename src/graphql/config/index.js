import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
import { BASE_URL } from "../../utils/URL";

export const client = new ApolloClient({
    uri: `${BASE_URL}`,
    cache: new InMemoryCache()
});