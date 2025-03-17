import React, { memo } from "react";
import { SlArrowRight } from "react-icons/sl";
import styles from "./NewsLink.module.css";

const NewsLink = ({ label }) => {
  return (
    <div className={styles.newsLink}>
      <Button type="link" icon={<SlArrowRight />}>
        <u>{label}</u>
      </Button>
    </div>
  );
};

export default memo(NewsLink);
