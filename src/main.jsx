import { StrictMode } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { registerSW } from "virtual:pwa-register";

import App from "./App.jsx";

import initializeI18n from "./Utils/initializeI18n"; // Moved i18n logic to a utility function
import { ThemeProvider } from "./ThemeContext";
// Styles
import "./index.css";
import "antd/dist/reset.css";
import { LanguageProvider } from "./LanguageContext.jsx";
import "./i18n"; // Ensure i18n is imported
import { CookieConsentProvider } from "./CookieConsentContext.jsx";

// Initialize i18n with proper error handling
initializeI18n();

// Ensure root element is present
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    "Root element not found. Please ensure your HTML includes a `div#root`."
  );
}

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New version available. Reload?")) {
      updateSW(true);
    }
  },
});
// Create and render root
const root = createRoot(rootElement);
root.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider>
      <LanguageProvider>
        <CookieConsentProvider>
          <Router>
            <StrictMode>
              <App />
            </StrictMode>
          </Router>
        </CookieConsentProvider>
      </LanguageProvider>
    </ThemeProvider>
  </I18nextProvider>
);

// Report web vitals (optional for performance monitoring)
