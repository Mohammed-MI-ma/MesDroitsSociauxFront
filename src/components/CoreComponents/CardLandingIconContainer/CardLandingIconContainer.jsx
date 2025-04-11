//__REACT
import React, { memo } from "react";
import { Link } from "react-router-dom";

//__STYLING
import styles from "./cardLandingIconContainer.module.css";

const CardLandingIconContainer = memo(({ icon, title, desc, link, to }) => {
  return (
    <div className={styles.cardsLanding}>
      <div className={styles.cardLandingContainer}>
        <MemoizedIcon icon={icon} />
        <MemoizedContent title={title} desc={desc} link={link} to={to} />
      </div>
    </div>
  );
});

const Icon = ({ icon }) => (
  <div className={styles.cardLandingIconContainer}>
    <img src={icon} alt="icon" />
  </div>
);

const Content = ({ title, desc, link, to }) => (
  <div className={styles.cardLandingContent}>
    <h4>{title}</h4>
    <p>{desc}</p>
    <Link to={to}>
      <Button
        type="link"
        className={styles.button}
        icon={<IoIosArrowForward />}
      >
        {link}
      </Button>
    </Link>
  </div>
);

/* Memoize child components to prevent unnecessary re-renders */
const MemoizedIcon = memo(Icon);
const MemoizedContent = memo(Content);

export default CardLandingIconContainer;
