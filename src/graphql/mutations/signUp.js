import gql from "graphql-tag";

export const SIGNUP_USER = gql`
  mutation signUpMutation(
    $usr: String
    $name: String
    $password: String
    $type: String
  ) {
    signUpUser(usr: $usr, name: $name, password: $password, type: $type) {
      usr
      name
      type
      token
    }
  }
`;
