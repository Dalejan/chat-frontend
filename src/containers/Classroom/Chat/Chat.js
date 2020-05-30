import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Chat.module.scss";
import GET_MESSAGES from "../../../graphql/queries/fetchMessages";
import ADD_MESSAGE from "../../../graphql/mutations/createMessage";
import MESSAGE_ADDED from "../../../graphql/subscriptions/newMessage";

import Message from "../../../components/Message/Message";
import { useQuery, useMutation, useSubscription } from "@apollo/client";

const Chat = (prop) => {
  const [addMessage] = useMutation(ADD_MESSAGE);

  const { loading, error, data: { messages } = {}, subscribeToMore } = useQuery(
    GET_MESSAGES
  );
  const { data: { messageAdded } = {} } = useSubscription(MESSAGE_ADDED);

  const inputRef = useRef();

  const subToMessages = useCallback(
    () =>
      subscribeToMore({
        document: MESSAGE_ADDED,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData?.data) return prev;
          const newFeedItem = subscriptionData.data.messageAdded;

          return Object.assign({}, prev, {
            messages: [...prev.messages, newFeedItem],
          });
        },
      }),
    [subscribeToMore]
  );

  const handleSendMessage = () => {
    if (inputRef.current.value.trim()) {
      addMessage({
        variables: {
          text: inputRef.current.value.trim(),
          usr: JSON.parse(localStorage.getItem("authInfo")).usr,
          date: new Date(),
        },
      });
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    subToMessages();
  }, [subToMessages]);

  const orderByDate = (messages) => {
    return [...messages].sort((a, b) => a.date - b.date);
  };

  return (
    <div className={styles.chat__container}>
      <div className={styles.chatbox}>
        {messages &&
          orderByDate(messages).map((message, i) => (
            <Message key={i} message={message} />
          ))}
      </div>

      <div className={styles.inputContainer}>
        <textarea ref={inputRef} placeholder="Escribe algo mi perro"></textarea>
        <button onClick={() => handleSendMessage()}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
