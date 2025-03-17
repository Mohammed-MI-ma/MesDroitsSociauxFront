import React from "react";
import styles from "./MatGrid.module.css"; // Import the CSS Module

const MatGrid = ({ children }) => {
  return <div className={styles.gridContainer}>{children}</div>;
};

export default MatGrid;
