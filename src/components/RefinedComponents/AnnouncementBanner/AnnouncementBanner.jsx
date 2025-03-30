import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./announcementBanner.module.css";
import fff from "/assets/images/netsocial.svg";

const AnnouncementBanner = () => {
  const { t } = useTranslation();

  return (
    <section
      className={`shadow-lg border-lg rounded-lg ${styles.announcementBanner}`}
    >
      <div className={`border-lg rounded-lg ${styles.zone1}`}>
        <span>{t("NEW_FEATURE")}</span>
        <span>{t("RSU_DESCRIPTION")}</span>
      </div>
      <div className={styles.zone2}>
        <p>{t("OBJECTIFS_DESCRIPTION")}</p>
        <Button>{t("ToutSavoirSurLeRSU")}</Button>
      </div>
      <div className={styles.zone3}>
        <img src={fff} />
      </div>
    </section>
  );
};

export default AnnouncementBanner;
