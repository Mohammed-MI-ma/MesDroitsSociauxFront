// services/keycloak.js

import Keycloak from "keycloak-js";

const keycloakInstance = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});

export const initKeycloak = async () => {
  try {
    const authenticated = await keycloakInstance.init({
      onLoad: "check-sso", // Automatically check session
      silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`, // Background authentication
      pkceMethod: "S256", // Enable PKCE for better security
      checkLoginIframe: true, // Re-authenticate silently when session expires
    });

    if (!authenticated) {
      console.warn("User is not authenticated. Redirecting to login...");
      keycloakInstance.login();
    }

    console.log("User authenticated:", authenticated);
    return authenticated;
  } catch (error) {
    console.error("Keycloak initialization failed:", error);
    return false;
  }
};

export const refreshToken = async () => {
  try {
    const refreshed = await keycloakInstance.updateToken(30); // Refresh token 30 seconds before expiry
    if (refreshed) {
      console.log("Token refreshed:", keycloakInstance.token);
    }
  } catch (error) {
    console.error("Failed to refresh token", error);
    keycloakInstance.logout(); // Logout if refresh fails
  }
};

export const logout = () => {
  keycloakInstance.logout();
};

export const hasRole = (role) => {
  return keycloakInstance.hasRealmRole(role);
};

export default keycloakInstance;
