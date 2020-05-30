import React from "react";
import Header from "../../components/Header/Header";
import Chat from "./Chat/Chat";
import styles from "./Classroom.module.scss";

const Classroom = (props) => {
  return (
    <>
      <Header {...props}></Header>
      <div className={styles.classroom__container}>
        <iframe
          title="Video"
          height="500"
          src="https://www.youtube.com/embed/Mly8degtx70"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Chat />
      </div>
    </>
  );
};

export default Classroom;
