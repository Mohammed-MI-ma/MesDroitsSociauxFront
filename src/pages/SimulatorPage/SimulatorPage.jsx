import React from "react";
import HeroSection from "../../components/CoreComponents/HeroSection/HeroSection";

import TadaAnimation from "../../components/CoreComponents/TadaAnimation/TadaAnimation";

//__ILLUSTRATION
import simulateur from "../../assets/images/svg/illus-votre-simulateur.svg";
import styles from "./SimulatorPage.module.css";
import { useTranslation } from "react-i18next";
import CardsLandingGroup from "../../components/RefinedComponents/CardsLandingGroup/CardsLandingGroup";
import {
  Bs1CircleFill,
  Bs2CircleFill,
  Bs3CircleFill,
  Bs4CircleFill,
} from "react-icons/bs";
import { ImCalculator } from "react-icons/im";
import { Badge } from "antd";

const SimulatorPage = () => {
  const { t } = useTranslation();

  return (
    <main style={{ flex: "1", minHeight: "300vh" }}>
      <HeroSection illustration={simulateur}>
        <>
          <TadaAnimation>
            <Badge.Ribbon
              text={t("NEW_FEATURE")}
              color="pink"
              placement="start"
              style={{ top: -10 }}
            >
              <h1 className={`${styles.title} shadow-lg`}>
                <ImCalculator /> {t("SEE_SIMULATORS")}
              </h1>
            </Badge.Ribbon>
          </TadaAnimation>
          <h2 className={styles.description}>{t("DECOUVRIR_PRESTATIONS")}:</h2>
          <ul className={styles.listSponserShip}>
            <li>
              <Bs1CircleFill />
              {t("sponserShip.REGISTRE_SOCIAL")}
            </li>
            <li>
              <Bs2CircleFill />
              {t("sponserShip.REGISTRE_POPULATION")}
            </li>
            <li>
              <Bs3CircleFill />
              {t("sponserShip.AIDES_SOCIALES")}
            </li>
            <li>
              <Bs4CircleFill />
              {t("sponserShip.Assurance_Maladie_Obligatoire")}
            </li>
          </ul>
        </>
      </HeroSection>
      <CardsLandingGroup />
    </main>
  );
};

export default SimulatorPage;
