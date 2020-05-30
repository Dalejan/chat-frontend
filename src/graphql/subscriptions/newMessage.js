import gql from "graphql-tag";

export default gql`
  subscription {
    messageAdded {
      usr
      text
      date
    }
  }
`;
