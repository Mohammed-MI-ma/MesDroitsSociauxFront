import React from "react";
import { useTranslation } from "react-i18next";

const OfflineBanner = () => {
  const { t } = useTranslation(); // Use t() function to get translations
  return (
    <div>
      <Result
        status="500"
        title={t("connection_lost_title")} // Translated title
        subTitle={t("connection_lost_message")} // Translated message
      />{" "}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#ffcc00",
          color: "#333",
          textAlign: "center",
          padding: "10px",
          fontSize: "14px",
          zIndex: 99999,
        }}
      >
        ⚠️ You are offline. Some features may not work.
      </div>
    </div>
  );
};

export default OfflineBanner;
