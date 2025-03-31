// src/keycloak.js
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/auth", // Replace with your Keycloak server URL
  realm: "Dev", // Replace with your Keycloak realm name
  clientId: "mern-app", // Replace with the client ID you created for your MERN app
});

export default keycloak;
