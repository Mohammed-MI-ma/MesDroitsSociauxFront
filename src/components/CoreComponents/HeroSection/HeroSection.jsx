import React from "react";

import styles from "./HeroSection.module.css";
import { useTranslation } from "react-i18next";
import im from "../../../assets/images/bgBlocTop.png";
const HeroSection = ({ children, illustration }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageHeader}>
      <div
        className={styles.headerBloc}
        style={{
          background: `url(${im}) -254px -67px no-repeat, url(${im}) 100% 100% no-repeat, linear-gradient(90deg,rgba(217,235,232,1) 100%,rgba(236,246,244,1) 72%,rgba(242,242,242,1) 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
        }}
      >
        <div className={styles.pageDescription}>{children}</div>
        <div className={styles.pageIllustration}>
          <img src={illustration} alt="illustration" />
        </div>
      </div>
      <small> {t("disclaimer")}</small>
    </div>
  );
};

export default HeroSection;
