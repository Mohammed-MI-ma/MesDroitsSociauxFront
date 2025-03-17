import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ModalCookiesConsent.module.css";
import CookiePreferenceFieldset from "./CookiePreferenceFieldset/CookiePreferenceFieldset";
import { IoMdClose } from "react-icons/io";

const ModalCookiesConsent = () => {
  const { t } = useTranslation();
  const preferences = [
    {
      title: "cookies.videoConsentTitle",
      description: "cookies.videoConsentDescription",
      service: "cookies.service",
      siteLink: "cookies.viewOfficialSite",
    },
    {
      title: "cookies.analyticsTitle",
      description: "cookies.analyticsDescription",
      service: "cookies.googleAnalyticsService",
      siteLink: "cookies.viewGoogleAnalytics",
      reminder: t("cookies.necessaryRefuse"),
      isAllowed: true,
    },

    {
      title: "cookies.necessaryTitle",
      description: "cookies.necessaryDescription",
      isVisible: false,
    },
  ];
  return (
    <Modal
      footer={null}
      open={false}
      title={<h2 className={styles.popinTitle}>{t("cookies.title")}</h2>}
    >
      <div className={styles.popinContent}>
        <p>{t("cookies.description")}</p>
        <form>
          {preferences.map((pref, index) => (
            <CookiePreferenceFieldset key={index} {...pref} />
          ))}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button>{t("cookies.savePreferences")}</Button>
            <Button icon={<IoMdClose />} />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalCookiesConsent;
