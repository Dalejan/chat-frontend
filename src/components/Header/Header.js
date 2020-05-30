import React, { useContext } from "react";
import styles from "./Header.module.scss";
import AuthContext from "../../utils/Auth.context";

const Header = (props) => {
  const { handleAuthFlow } = useContext(AuthContext);
  const userName = JSON.parse(localStorage.getItem("authInfo")).name;
  const logOut = () => {
    handleAuthFlow(null);
    props.history.push("/login");
  };
  return (
    <div className={styles.header__container}>
      <p>Hola {userName}!</p>
      <p className={styles.logout} onClick={() => logOut()}>
        Salir
      </p>
    </div>
  );
};

export default Header;
