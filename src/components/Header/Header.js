import React, { useContext } from "react";
import styles from "./Header.module.scss";
import AuthContext from "../../utils/Auth.context";

const Header = (props) => {
  const { handleAuthFlow } = useContext(AuthContext);
  const logOut = () => {
    handleAuthFlow(null);
    props.history.push("/login");
  };
  return (
    <div className={styles.header__container} onClick={() => logOut()}>
      header
    </div>
  );
};

export default Header;
