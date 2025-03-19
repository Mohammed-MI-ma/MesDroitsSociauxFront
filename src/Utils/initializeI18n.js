/* eslint-disable no-undef */
import i18n from "i18next";
import Backend from "i18next-xhr-backend";

export default async function initializeI18n() {
  try {
    const arTranslations = await import("../i18n/ar/translation.json");
    const frTranslations = await import("../i18n/fr/translation.json");

    i18n.use(Backend).init({
      fallbackLng: "fr",
      debug: process.env.NODE_ENV === "dev",
      interpolation: {
        escapeValue: false,
      },
      resources: {
        ar: { translation: arTranslations },
        fr: { translation: frTranslations },
      },
    });
  } catch (error) {
    console.error("Error initializing i18n:", error);
  }
}
