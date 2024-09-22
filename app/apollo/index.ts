import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { GRAPHQL_SERVER_URL } from "../utils/constants";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_SERVER_URL,
  }),
  cache: new InMemoryCache(),
});
