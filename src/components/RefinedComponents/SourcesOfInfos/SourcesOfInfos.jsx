import React from "react";
import styles from "./SourcesOfInfos.module.css";
import mi from "/assets/images/MI.webp";
const SourcesOfInfos = () => {
  return (
    <div className={`${styles.nosPartenairesBloc}`}>
      <h2>NOS SOURCES D'INFORMATION</h2>
      <div className={`${styles.redLine}`}></div>
      <h3>
        Projet personnel conçu conformément aux structures et exigences définies
        par le cadre légal en vigueur
      </h3>
      <div className={styles.wrapperPartenaires}>
        <div className={styles.nosPartenaires}> </div>
        <div className={styles.nosPartenairesMinisteres}>
          <Button>
            <img className={styles.logoOrganisme} src={mi}></img>
          </Button>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default SourcesOfInfos;
