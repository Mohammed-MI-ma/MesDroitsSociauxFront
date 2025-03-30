// __REACT
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// __I18N
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import initializeI18n from "./Utils/initializeI18n";

// __CONTEXT & STORE
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext.jsx";
import { CookieConsentProvider } from "./CookieConsentContext.jsx";
import { Provider } from "react-redux";
import Store from "./store";

// __SERVICE WORKER & PWA
import { registerSW } from "virtual:pwa-register";

// __STYLES
import "./index.css";
import "antd/dist/reset.css";
import "animate.css";

// __APP
import App from "./App.jsx";

// Initialize i18n with proper error handling
initializeI18n();

// Ensure root element is present
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    "Root element not found. Please ensure your HTML includes a `div#root`."
  );
}

registerSW({
  onNeedRefresh() {
    console.log("New content available, refresh the page!");
  },
  onOfflineReady() {
    console.log("App is ready to work offline.");
  },
});
// Create and render the root element
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
              </Router>
            </Provider>
          </CookieConsentProvider>
        </LanguageProvider>
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
);

// Report web vitals (optional for performance monitoring)
