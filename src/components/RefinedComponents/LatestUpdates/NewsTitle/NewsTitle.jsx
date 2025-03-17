import React, { memo } from "react";
import styles from "./NewsTitle.module.css";

const NewsTitle = ({ title }) => {
  return (
    <div className={styles.title} id="title">
      <h2>{title}</h2>
      <div className={styles.redLine} />
    </div>
  );
};

export default memo(NewsTitle);
