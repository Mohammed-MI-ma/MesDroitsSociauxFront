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

      const newPath = `/${value}/${segments.join("/")}`;
      navigate(newPath);
    },
    [setLanguage, i18n, location.pathname, navigate] // location.pathname is enough
  );

  const options = [
    { value: "fr", label: t("FR") },
    { value: "ar", label: t("AR") },
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
