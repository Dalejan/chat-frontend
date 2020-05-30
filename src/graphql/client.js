import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

export const server_url = process.env.SERVER_URL;

// Create an http link:
const httpLink = new HttpLink({
  uri: "http://localhost:8080/graphql",
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://localhost:8080/graphql`,
  options: {
    reconnect: true,
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
