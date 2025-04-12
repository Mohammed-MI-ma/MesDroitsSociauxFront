import React from "react";
import { useTranslation } from "react-i18next";

//__STYLES
import styles from "./BigScreensNewsFeed.module.css";

const BigScreensNewsFeed = () => {
  const { t } = useTranslation();
  const newsList = [
    { title: "Morocco announces new digital ID system" },
    { title: "Casablanca tech summit 2025 kicks off" },
    { title: "Government launches job support initiative" },
    { title: "AI startups in Morocco raise $10M" },
  ];
  return (
    <section className={styles.container} aria-labelledby="breaking-news-title">
      <h2 id="breaking-news-title">{t("Breakingnews")}</h2>
      <main className="flex w-full gap-10">
        {newsList.map((news, index) => (
          <article className={styles.squareBox} key={index}>
            <h3 className="text-white text-center">{news.title}</h3>
          </article>
        ))}
      </main>
    </section>
  );
};

export default BigScreensNewsFeed;
