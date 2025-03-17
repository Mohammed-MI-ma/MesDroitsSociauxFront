import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import LanguageContext from "../../../LanguageContext";
import Select from "antd/es/select";
import "antd/es/select/style"; // Only imports Spin styles

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setLanguage(value);
    i18n.changeLanguage(value); // Sync with i18next
  };
  return (
    <Select
      defaultValue={language === "fr" ? t("AR") : t("FR")}
      onChange={handleChange}
      options={[
        {
          value: "fr",
          label: t("FR"),
          disabled: language === "ar" ? false : true,
        },
        {
          value: "ar",
          label: t("AR"),
          disabled: language === "fr" ? false : true,
        },
      ]}
    />
  );
};

export default LanguageSwitcher;
