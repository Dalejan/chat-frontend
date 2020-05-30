import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const server_url = process.env.SERVER_URL;

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:8080/graphql",
  }),
});
