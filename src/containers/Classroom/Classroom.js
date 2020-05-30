import React from "react";
import Header from "../../components/Header/Header";
import Chat from "./Chat/Chat";

const Classroom = (props) => {
  return (
    <>
      <Header {...props}></Header>
      classroom
      <Chat />
    </>
  );
};

export default Classroom;
