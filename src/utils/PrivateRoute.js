import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./Auth.context";

const PrivateRoute = ({ component: Component, to, key }) => {
  const authSaved = JSON.parse(localStorage.getItem("authInfo"));
  return (
    <Route
      to={to}
      key={key}
      render={(props) =>
        authSaved ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
