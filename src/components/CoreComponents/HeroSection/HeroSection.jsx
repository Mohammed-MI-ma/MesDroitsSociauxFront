import React from "react";

import styles from "./HeroSection.module.css";
import { useTranslation } from "react-i18next";
import im from "/assets/images/bgBlocTop.png";
const HeroSection = ({ children, illustration, without = false }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageHeader}>
      <div
        className={styles.headerBloc}
        style={{
          background: without
            ? "#e5edfa"
            : `url(${im}) -254px -67px no-repeat, linear-gradient(90deg,rgb(255, 255, 255) 100%,rgb(255, 255, 255) 72%,rgba(242,242,242,1) 74%, rgba(217,235,232,1) 77%,rgba(246,255,254,1) 100%)`,
        }}
      >
        <div className={styles.pageDescription}>{children}</div>
        <div className={styles.pageIllustration}>
          <img src={illustration} alt="illustration" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
