// src/hooks/useAnalytics.js
import { useEffect } from "react";
import { useCookieConsent } from "../CookieConsentContext";

const useAnalytics = () => {
  const { cookiesConsent } = useCookieConsent();

  useEffect(() => {
    if (cookiesConsent?.googleAnalyticsService === true) {
      const script = document.createElement("script");
      script.src = "https://www.google-analytics.com/analytics.js";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.ga("create", "UA-XXXXXXX-X", "auto");
        window.ga("send", "pageview");
      };
    }
  }, [cookiesConsent]);

  return null;
};

export default useAnalytics;
