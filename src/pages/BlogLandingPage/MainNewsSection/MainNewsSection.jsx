import React from "react";
import styles from "./MainNewsSection.module.css";
import EditorPicks from "../../../components/RefinedComponents/Blog/EditorPicks/EditorPicks";

const MainNewsSection = () => {
  return (
    <main className={styles.mainNewsSection}>
      <EditorPicks />
      <div className={styles.mainNews}></div>
      <EditorPicks />
    </main>
  );
};

export default MainNewsSection;
