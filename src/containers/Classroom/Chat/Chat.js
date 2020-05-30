import React, { useState, useEffect, useRef } from "react";
import styles from "./Chat.module.scss";
import GET_MESSAGES from "../../../graphql/queries/fetchMessages";
import ADD_MESSAGE from "../../../graphql/mutations/createMessage";
import Message from "../../../components/Message/Message";

import { useQuery, useMutation } from "@apollo/client";

const Chat = (prop) => {
  const [messages, setMessages] = useState([]);
  const { loading, error, data } = useQuery(GET_MESSAGES);

  const inputRef = useRef();

  useEffect(() => {
    if (!loading) {
      if (data) {
        setMessages(data.messages);
      } else {
        console.log("no messages");
      }
    }
  }, [loading, data]);

  const [addMessage] = useMutation(ADD_MESSAGE);

  const handleSendMessage = () => {
    console.log(inputRef.current.value);
    if (inputRef.current.value.trim()) {
      addMessage({
        variables: {
          text: inputRef.current.value.trim(),
          usr: JSON.parse(localStorage.getItem("authInfo")).usr,
          date: new Date(),
        },
      });
    }
  };

  return (
    <div className={styles.chat__container}>
      Chat
      <div className={styles.chatMessages__container}>
        {messages.map((message, i) => (
          <Message key={i} message={message} />
        ))}
      </div>
      <textarea ref={inputRef} placeholder="Escribe algo mi perro"></textarea>
      <button onClick={() => handleSendMessage()}>Send</button>
    </div>
  );
};

export default Chat;
