// components/CoreComponents/SponsorshipList/SponsorshipList.js
import React from "react";
import { motion } from "framer-motion";
import styles from "./SponsorshipList.module.css"; // Create this for custom styles
import {
  Bs1CircleFill,
  Bs2CircleFill,
  Bs3CircleFill,
  Bs4CircleFill,
} from "react-icons/bs";
import { useTranslation } from "react-i18next";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
};

const SponsorshipList = ({ variants }) => {
  const { t } = useTranslation();

  const listItems = [
    {
      icon: <Bs1CircleFill />,
      label: t("sponserShip.REGISTRE_POPULATION"),
    },
    {
      icon: <Bs2CircleFill />,
      label: t("sponserShip.REGISTRE_SOCIAL"),
    },
    {
      icon: <Bs3CircleFill />,
      label: t("sponserShip.AIDES_SOCIALES"),
    },
    {
      icon: <Bs4CircleFill />,
      label: t("sponserShip.Assurance_Maladie_Obligatoire"),
    },
  ];

  return (
    <motion.ul className={styles.list} variants={variants}>
      {listItems.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className={styles.listItem}
        >
          {item.icon}
          {item.label}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SponsorshipList;
