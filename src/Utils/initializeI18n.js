// src/i18n.js
import i18n from "i18next";
import Backend from "i18next-xhr-backend";

export default function initializeI18n() {
  return new Promise((resolve, reject) => {
    import("../i18n/ar/translation.json")
      .then((arTranslations) => {
        import("../i18n/fr/translation.json")
          .then((frTranslations) => {
            i18n.use(Backend).init(
              {
                fallbackLng: "fr",
                debug: process.env.NODE_ENV === "dev",
                interpolation: {
                  escapeValue: false,
                },
                supportedLngs: ["fr", "ar"],
                resources: {
                  ar: { translation: arTranslations },
                  fr: { translation: frTranslations },
                },
                detection: {
                  order: ["querystring", "cookie", "localStorage", "navigator"],
                  caches: ["cookie"],
                },
              },
              (error, t) => {
                if (error) {
                  reject(error);
                } else {
                  resolve();
                }
              }
            );
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
}

// Export i18n to be used in other parts of the app
export { i18n };
