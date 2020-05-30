import gql from "graphql-tag";

export default gql`
  mutation newMessageMutation($text: String, $date: String, $usr: String) {
    createMessage(text: $text, date: $date, usr: $usr) {
      text
      date
      usr
      id
    }
  }
`;
