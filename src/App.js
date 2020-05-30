import React, { useState } from "react";
import "./index.scss";
import Layout from "./containers/Layout/Layout";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import AuthContext from "./utils/Auth.context";

const App = () => {
  const [authInfo, setAuthenticated] = useState(null);

  const handleAuthFlow = (authValue) => {
    setAuthenticated(authValue);
    if (authValue) {
      localStorage.setItem("authInfo", JSON.stringify(authValue));
    } else {
      localStorage.removeItem("authInfo");
    }
  };

  return (
    <AuthContext.Provider value={{ authInfo, handleAuthFlow }}>
      <ApolloProvider client={client}>
        <Layout></Layout>
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

export default App;
