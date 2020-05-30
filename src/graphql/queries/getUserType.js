import gql from "graphql-tag";

export default gql`
  query findUserType($usr: String) {
    user(usr: $usr) {
      type
    }
  }
`;
