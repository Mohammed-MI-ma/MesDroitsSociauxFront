import React, { createContext, useContext, useEffect, useState } from "react";
import { initKeycloak } from "../services/keycloak"; // Import the Keycloak initialization

const KeycloakContext = createContext({ keycloak: null, authenticated: false });

export const KeycloakProvider = ({ children }) => {
  const [keycloakInstance, setKeycloakInstance] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const initializeKeycloak = async () => {
      const keycloak = await initKeycloak(); // Get the actual Keycloak instance
      setKeycloakInstance(keycloak);
      setAuthenticated(keycloak.authenticated || false);
    };

    initializeKeycloak();
  }, []); // No dependencies, runs only once

  if (!keycloakInstance) {
    return <div>Loading...</div>; // Show loading state until Keycloak is initialized
  }

  return (
    <KeycloakContext.Provider
      value={{ keycloak: keycloakInstance, authenticated }}
    >
      {children}
    </KeycloakContext.Provider>
  );
};

export const useKeycloak = () => useContext(KeycloakContext);
