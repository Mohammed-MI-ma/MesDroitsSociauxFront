// src/KeycloakContext.js
import React, { createContext, useState, useEffect } from "react";
import keycloak from "./keycloak.js"; // Assuming this file has the Keycloak instance configuration

// Create the context
const KeycloakContext = createContext();

// KeycloakProvider component
export const KeycloakProvider = ({ children }) => {
  const [keycloakState, setKeycloakState] = useState(null);

  useEffect(() => {
    keycloak
      .init({ onLoad: "login-required" })
      .then((authenticated) => {
        if (authenticated) {
          setKeycloakState(keycloak);
        } else {
          keycloak.login(); // Redirect to Keycloak login page
        }
      })
      .catch((err) => {
        console.error("Keycloak initialization failed", err);
      });
  }, []);

  return (
    <KeycloakContext.Provider value={{ keycloakState }}>
      {children}
    </KeycloakContext.Provider>
  );
};

export default KeycloakContext;
