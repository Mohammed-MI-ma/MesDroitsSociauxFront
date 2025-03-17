import React from "react";

import styles from "./HeroSection.module.css";
const HeroSection = ({ children, illustration }) => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.headerBloc}>
        <div className={styles.pageDescription}>{children}</div>
        <div className={styles.pageIllustration}>
          <img src={illustration} alt="illustration" />
        </div>
      </div>{" "}
    </div>
  );
};

export default HeroSection;
