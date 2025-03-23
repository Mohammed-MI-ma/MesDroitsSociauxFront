import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./FAQAccodion.module.css";
const FAQAccodion = () => {
  const { t } = useTranslation();

  const text = (
    <div style={{ fontSize: "16px" }}>
      <p>{t("InfosNonConservees")}</p>
      <p>{t("InfosPreaffichees")}</p>
      <p>{t("SaisieNonDeclaration")}</p>
      <p>{t("FinSimulation")}</p>
      <ul>
        <li>{t("ResultatsIndicatifs1")}</li>
        <li>{t("ResultatsIndicatifs2")}</li>
      </ul>
      <p>{t("PolitiqueConfidentialite")}</p>
    </div>
  );
  const items = [
    {
      key: "1",
      label: <h1 className={styles.header}>{t("CommentUtilisationInfos")}</h1>,
      children: <p>{text}</p>,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#19355c",
        },
      }}
    >
      <div className={styles.panelBody}>
        <Collapse items={items} onChange={onChange} />
      </div>
    </ConfigProvider>
  );
};

export default FAQAccodion;
