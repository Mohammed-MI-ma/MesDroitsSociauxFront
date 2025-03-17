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

    // ✅ Update i18n language
    i18n
      .changeLanguage(language)
      .catch((err) => console.error("i18n Error:", err));

    document.documentElement.setAttribute("dir", isArabic ? "rtl" : "ltr");
    setIsRTL(isArabic); // Sync with ThemeContext
    localStorage.setItem("lang", language);
    console.log("isArabic", isArabic);
    // Apply font dynamically
    const fontUrl = isArabic
      ? FontsConfig["Primary-Font_ar"]
      : FontsConfig["Primary-Font"];
    document.documentElement.style.setProperty(
      "--primary-font",
      `url(${fontUrl})`
    );
  }, [language, setIsRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
