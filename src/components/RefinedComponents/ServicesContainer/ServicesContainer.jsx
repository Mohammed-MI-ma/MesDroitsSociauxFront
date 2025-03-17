import React from "react";
import { useTranslation } from "react-i18next";
import MatGrid from "./MatGrid/MatGrid";
import MatGridTile from "./MatGridTile/MatGridTile";
import simulateur from "./illus-votre-simulateur.svg";

import styles from "./ServicesContainer.module.css";
import { Link } from "react-router-dom";

const ServicesContainer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.ServicesBloc}>
      <div className={styles.servicesContainer}>
        <h3>{t("SOCIAL_RIGHTS_DESCRIPTION")}</h3>
        <MatGrid>
          <MatGridTile>
            <div className={styles.servicesContent}>
              <div className="flex justify-center items-center">
                <img src={simulateur} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 className={styles.servicesTitle}>{t("SEE_SIMULATORS")}</h2>
                <p className={styles.description}>
                  {t("DISCOVER_SOCIAL_BENEFITS")}
                </p>
                <Link to="/votre-simulateur/accueil">
                  <Button style={{ fontSize: "12px" }}>
                    {t("PERFORM_SIMULATION")}
                  </Button>
                </Link>
              </div>
            </div>
          </MatGridTile>
          <MatGridTile>
            <div className={styles.servicesContent}>
              <div className="flex justify-center items-center">
                <img src={simulateur} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 className={styles.servicesTitle}>{t("SEE_SIMULATORS")}</h2>
                <p className={styles.description}>
                  Découvrez en quelques clics les prestations sociales
                  auxquelles vous pourriez prétendre
                </p>
                <Button style={{ fontSize: "12px" }}>
                  Effectuer une simulation
                </Button>
              </div>
            </div>
          </MatGridTile>{" "}
          <MatGridTile>
            <div className={styles.servicesContent}>
              <div className="flex justify-center items-center">
                <img src={simulateur} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 className={styles.servicesTitle}>{t("SEE_SIMULATORS")}</h2>
                <p className={styles.description}>
                  Découvrez en quelques clics les prestations sociales
                  auxquelles vous pourriez prétendre
                </p>
                <Button style={{ fontSize: "12px" }}>
                  Effectuer une simulation
                </Button>
              </div>
            </div>
          </MatGridTile>{" "}
          <MatGridTile>
            <div className={styles.servicesContent}>
              <div className="flex justify-center items-center">
                <img src={simulateur} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 className={styles.servicesTitle}>{t("SEE_SIMULATORS")}</h2>
                <p className={styles.description}>
                  Découvrez en quelques clics les prestations sociales
                  auxquelles vous pourriez prétendre
                </p>
                <Button style={{ fontSize: "12px" }}>
                  Effectuer une simulation
                </Button>
              </div>
            </div>
          </MatGridTile>
        </MatGrid>
        <Button>{t("SEE_ALL_SERVICES")}</Button>
      </div>
    </div>
  );
};

export default ServicesContainer;
