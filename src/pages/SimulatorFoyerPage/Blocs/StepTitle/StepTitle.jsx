import React from "react";
import styles from "./StepTitle.module.css";

const StepTitle = ({ title }) => {
  return (
    <div className={styles.etapeTitle}>
      <h1>{title}</h1>
    </div>
  );
};

export default StepTitle;
