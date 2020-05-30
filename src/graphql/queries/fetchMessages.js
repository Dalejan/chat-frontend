import gql from "graphql-tag";

export default gql`
  query getMessagesQuery {
    messages {
      text
      usr
    }
  }
`;
