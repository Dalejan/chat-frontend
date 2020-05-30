import React from "react";
import styles from "./Message.module.scss";

const Message = (props) => {
  const { message } = props;
  const authSaved = JSON.parse(localStorage.getItem("authInfo"));

  return (
    <div
      className={[
        styles.message__container,
        message.usr === authSaved.usr ? styles.ownMessage : styles.otherMessage,
      ].join(" ")}
    >
      {message.text}
    </div>
  );
};

export default Message;
