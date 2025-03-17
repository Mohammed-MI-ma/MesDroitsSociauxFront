import React from "react";
import styles from "./MatGridTile.module.css"; // Import the CSS Module

const MatGridTile = ({ children }) => {
  return <div className={styles.gridItem}>{children}</div>;
};

export default MatGridTile;
