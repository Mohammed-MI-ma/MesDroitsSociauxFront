import React, { createContext, useState, useEffect, useContext } from "react";

// Context for cookie consent
const CookieConsentContext = createContext();

export const CookieConsentProvider = ({ children }) => {
  const [cookiesConsent, setCookiesConsent] = useState(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookiesConsent");
    const consentDate = localStorage.getItem("cookiesConsentDate");
    const currentDate = new Date().getTime();

    // Check if consent is saved and if it's still valid (6 months expiration)
    if (
      savedConsent &&
      consentDate &&
      currentDate - consentDate < 6 * 30 * 24 * 60 * 60 * 1000
    ) {
      setCookiesConsent(JSON.parse(savedConsent));
    }
  }, []);

  const saveConsent = (preferences) => {
    setCookiesConsent(preferences);
    localStorage.setItem("cookiesConsent", JSON.stringify(preferences));
    localStorage.setItem("cookiesConsentDate", new Date().getTime().toString());
  };

  return (
    <CookieConsentContext.Provider value={{ cookiesConsent, saveConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => useContext(CookieConsentContext);
