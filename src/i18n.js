import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang") || "fr", // Default language
  fallbackLng: "fr", // Fallback if no language is found
  interpolation: { escapeValue: false }, // React already escapes values
});

export default i18n;
