import React, { createContext, useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext"; // Import theme for RTL support
import { FontsConfig } from "./fontsConfig";
import i18n from "i18next"; // Import i18n

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "fr"
  );
  const { setIsRTL } = useContext(ThemeContext); // Update RTL state globally

  useEffect(() => {
    const isArabic = language === "ar";
    document.documentElement.lang = language;
    if (!i18n) return; // ✅ Ensure i18n is available before calling changeLanguage

    // Wait for i18n to initialize before calling changeLanguage
    if (i18n.isInitialized) {
      i18n
        .changeLanguage(language)
        .catch((err) => console.error("i18n Error:", err));

      document.documentElement.setAttribute("dir", isArabic ? "rtl" : "ltr");
      setIsRTL(isArabic);
      localStorage.setItem("lang", language);

      console.log("isArabic", isArabic);

      // Set font dynamically
      const fontUrl = isArabic
        ? FontsConfig["Primary-Font_ar"]
        : FontsConfig["Primary-Font"];
      document.documentElement.style.setProperty("--primary-font", fontUrl);
    }
  }, [language, setIsRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
