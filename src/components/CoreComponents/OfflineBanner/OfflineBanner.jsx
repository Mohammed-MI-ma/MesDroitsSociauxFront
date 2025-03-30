import React from "react";
import { useTranslation } from "react-i18next";

const OfflineBanner = () => {
  const { t } = useTranslation(); // Use t() function to get translations
  return (
    <div>
      <Result
        status="500"
        title={
          <h1 style={{ fontFamily: "var(--font-primary)" }}>
            {t("connection_lost_title")}
          </h1>
        } // Translated title
        subTitle={
          <h3 style={{ fontFamily: "var(--font-primary)" }}>
            {t("connection_lost_message")}
          </h3>
        } // Translated message
      />
    </div>
  );
};

export default OfflineBanner;
