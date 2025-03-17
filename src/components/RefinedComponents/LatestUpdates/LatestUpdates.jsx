import React from "react";
import styles from "./LatestUpdates.module.css";
import attentionTravaux from "./attentionTravaux.png";
import zzzz from "./tireLireCochon.png";
import { useTranslation } from "react-i18next";
import NewsTitle from "./NewsTitle/NewsTitle";
import NewsLink from "./NewsLink/NewsLink";

const LatestUpdates = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.latestUpdates}>
      <div className={styles.newsSection}>
        <NewsTitle title={t("NEWS")} />
        <NewsLink label={t("MORE_NEWS")} />

        <div className={styles.sectionContent} id="news">
          <div id="news1">
            {/** Illustration */}
            <div className={`${styles.newsCardImageNews1} `}>
              <img src={attentionTravaux} alt="" />
            </div>
            {/**text */}
            <div className={`${styles.newsCardTextNews1}`}>
              <h3>Attention courriel, appel ou SMS frauduleux</h3>
              <p>15/01/2025</p>
            </div>
          </div>
          <div id="news2">
            {/** Illustration */}
            <div className={`${styles.newsCardImage}`}>
              <img src={zzzz}></img>
            </div>

            <div className={`${styles.newsCardText} `}>
              <h3>Attention courriel, appel ou SMS frauduleux</h3>
              <p>15/01/2025</p>
            </div>
          </div>
          <div id="news3">
            {/** Illustration */}
            <div className={`${styles.newsCardImage}`}>
              <img src={zzzz}></img>
            </div>

            <div className={`${styles.newsCardText} `}>
              <h3>Attention courriel, appel ou SMS frauduleux</h3>
              <p>15/01/2025</p>
            </div>
          </div>{" "}
          <div id="news3">
            {/** Illustration */}
            <div className={`${styles.newsCardImage}`}>
              <img src={zzzz}></img>
            </div>

            <div className={`${styles.newsCardText} ${styles.smalleSize}`}>
              <h3>Attention courriel, appel ou SMS frauduleux</h3>
              <p>15/01/2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
