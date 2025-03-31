// src/index.jsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// i18n and internationalization setup
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import initializeI18n from "./Utils/initializeI18n";

// Contexts and Store
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext.jsx";
import { CookieConsentProvider } from "./CookieConsentContext.jsx";
import { Provider } from "react-redux";
import Store from "./store";

// Service Worker & PWA
import { registerSW } from "virtual:pwa-register";

// Styles
import "./index.css";
import "antd/dist/reset.css";
import "animate.css";

// App component and Keycloak Context
import App from "./App.jsx";
import { KeycloakProvider } from "./KeycloakContext"; // Import KeycloakProvider

// Initialize i18n
initializeI18n();

// Ensure root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    "Root element not found. Please ensure your HTML includes a `div#root`."
  );
}

// Register service worker
registerSW({
  onNeedRefresh() {
    console.log("New content available, refresh the page!");
  },
  onOfflineReady() {
    console.log("App is ready to work offline.");
  },
});

// Create root and render the app
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <LanguageProvider>
          <CookieConsentProvider>
            <Provider store={Store}>
              <Router>
                <App />
              </Router>{" "}
            </Provider>{" "}
          </CookieConsentProvider>
        </LanguageProvider>
      </ThemeProvider>{" "}
    </I18nextProvider>
  </StrictMode>
);
