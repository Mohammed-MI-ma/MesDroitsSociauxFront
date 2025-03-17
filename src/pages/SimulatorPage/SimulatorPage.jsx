import React from "react";
import HeroSection from "../../components/CoreComponents/HeroSection/HeroSection";

//__ILLUSTRATION
import simulateur from "../../assets/images/svg/illus-votre-simulateur.svg";
import styles from "./SimulatorPage.module.css";
import { useTranslation } from "react-i18next";

const SimulatorPage = () => {
  const { t } = useTranslation();

  return (
    <main style={{ flex: "1", minHeight: "300vh" }}>
      <HeroSection illustration={simulateur}>
        <>
          <h1 className={styles.title}>{t("VOTRE_SIMULATEUR")}</h1>
          <br></br>
          <h2 className={styles.description}>{t("DECOUVRIR_PRESTATIONS")}</h2>
        </>
      </HeroSection>
    </main>
  );
};

export default SimulatorPage;
