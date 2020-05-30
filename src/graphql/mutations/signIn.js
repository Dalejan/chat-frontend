import gql from "graphql-tag";

export default gql`
  mutation signInMutation($usr: String, $password: String) {
    signInUser(usr: $usr, password: $password) {
      usr
      name
      type
      token
    }
  }
`;
