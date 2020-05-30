import React, { useEffect } from "react";
import styles from "./Message.module.scss";
import GET_USER_TYPE from "../../graphql/queries/getUserType";
import { useQuery } from "@apollo/client";

const Message = (props) => {
  const { message } = props;
  const authSaved = JSON.parse(localStorage.getItem("authInfo"));

  const { loading, error, data } = useQuery(GET_USER_TYPE, {
    variables: { usr: message.usr },
  });

  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data]);
  return (
    <div
      className={[
        styles.message__container,
        message.usr === authSaved.usr ? styles.ownMessage : styles.otherMessage,
        data?.user.type !== "student" ? styles.moderator : "",
      ].join(" ")}
    >
      {message.text}
    </div>
  );
};

export default Message;
