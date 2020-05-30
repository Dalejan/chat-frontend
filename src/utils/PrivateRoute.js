import React from "react";
import { Route, Redirect } from "react-router-dom";

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
