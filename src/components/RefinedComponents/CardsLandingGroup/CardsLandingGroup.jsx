import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./CardsLandingGroup.module.css";
import CardLandingIconContainer from "../../CoreComponents/CardLandingIconContainer/CardLandingIconContainer";

import step from "../../../assets/images/svg/card-step-icon.svg";
import document from "../../../assets/images/svg/card-documents-icon.svg";
import aid from "../../../assets/images/svg/card-aid-icon.svg";

const CardsLandingGroup = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      icon: step,
      title: t("SimpleRapideGratuit"),
      desc: t("VotreSimulationMoinsMinutes"),
      link: t("voirEtapesSimulation"),
    },
    {
      icon: aid,
      title: t("SimpleRapideGratuit"),
      desc: t("Des aides nationales et des aides locales"),
      link: t("Voir les étapes de la simulation"),
    },
    {
      icon: document,
      title: t("Préparez vos infos"),
      desc: t("Pour indiquer précisément votre situation"),
      link: t("Voir les étapes de la simulation"),
    },
  ];

  return (
    <div className={styles.cardsLandingGroup}>
      {cardData.map(({ icon, title, desc, link }, index) => (
        <CardLandingIconContainer
          key={index}
          icon={icon}
          title={title}
          desc={desc}
          link={link}
        />
      ))}
    </div>
  );
};

export default CardsLandingGroup;
