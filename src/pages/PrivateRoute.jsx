/* eslint-disable no-unused-vars */
// src/PrivateRoute.js

import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import KeycloakContext from "./KeycloakContext";

const PrivateRoute = ({ ...rest }) => {
  const { keycloakState } = useContext(KeycloakContext);

  if (!keycloakState) {
    return <div>Loading...</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        keycloakState.authenticated ? <p>pipo</p> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
