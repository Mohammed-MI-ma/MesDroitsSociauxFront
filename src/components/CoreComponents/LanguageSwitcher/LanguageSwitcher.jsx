import React, { useContext, useCallback } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../../../LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Use useCallback to prevent unnecessary re-creations of handleChange
  const handleChange = useCallback(
    (value) => {
      setLanguage(value);
      i18n.changeLanguage(value);

      const segments = location.pathname.split("/").filter(Boolean);
      if (segments[0] === "fr" || segments[0] === "ar") {
        segments.shift();
      }

      let newPath = `/${value}${
        segments.length ? "/" + segments.join("/") : ""
      }`;

      // 🔥 Remove trailing slash if it's there (but not from root slashes)
      if (newPath !== "/" && newPath.endsWith("/")) {
        newPath = newPath.slice(0, -1);
      }

      navigate(newPath);
    },
    [setLanguage, i18n, location.pathname, navigate]
  );

  const options = [
    { value: "fr", label: <div style={{ fontSize: "1rem" }}>{t("FR")}</div> },
    { value: "ar", label: <div style={{ fontSize: "1rem" }}>{t("AR")}</div> },
  ];

  return (
    <Select
      value={language}
      onChange={handleChange}
      options={options}
      style={{ width: 100 }}
    />
  );
};

export default LanguageSwitcher;
