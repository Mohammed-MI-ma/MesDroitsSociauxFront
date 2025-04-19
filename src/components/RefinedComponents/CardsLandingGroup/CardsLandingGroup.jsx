import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import styles from "./CardsLandingGroup.module.css";
import CardLandingIconContainer from "../../CoreComponents/CardLandingIconContainer/CardLandingIconContainer";

import step from "/assets/images/svg/card-step-icon.svg";
import document from "/assets/images/svg/card-documents-icon.svg";
import aid from "/assets/images/svg/card-aid-icon.svg";
import LanguageContext from "../../../LanguageContext";

const CardsLandingGroup = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  const cardData = [
    {
      icon: step,
      title: t("simulation.simpleRapideGratuit"),
      desc: t("simulation.votreSimulationMoinsMinutes"),
      link: t("simulation.voirEtapesSimulation"),
      to: `/${language}/votre-simulateur/accueil/votreSimulationMoins15Minutes`,
    },
    {
      icon: aid,
      title: t("simulation.aidesEstimees"),
      desc: t("simulation.aidesNationalesLocales"),
      link: t("simulation.voirAides"),
    },
    {
      icon: document,
      title: t("simulation.preparezVosInfos"),
      desc: t("simulation.indiquerPrecisementSituation"),
      link: t("simulation.voirDocumentsUtiles"),
      to: `/${language}/votre-simulateur/accueil/Preparez_vos_infos`,
    },
  ];

  return (
    <div className={styles.cardsLandingGroup}>
      {cardData.map(({ icon, title, desc, link, to }, index) => (
        <CardLandingIconContainer
          key={index}
          icon={icon}
          title={title}
          desc={desc}
          link={link}
          to={to}
        />
      ))}
    </div>
  );
};

export default CardsLandingGroup;
