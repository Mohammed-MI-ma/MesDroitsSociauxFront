import React, { useContext } from "react";
import style from "./heroContent.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LanguageContext from "../../../../LanguageContext";
export const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  },
};

export const itemVariants = {
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

const HeroContent = () => {
  let { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <motion.div
      className={style.heroContent}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1>{t("MESDROITSSOCIAUX")}</h1>
        <h2>{t("slogan")}</h2>
        <p>{t("CONSULT_RIGHTS")}</p>
      </motion.div>
      <Link to={`/${language}/votre-simulateur/accueil`}>
        <motion.div className="relative" variants={itemVariants}>
          <Badge.Ribbon
            text={t("NEW_FEATURE")}
            color={"var(--color-red)"}
            placement="start"
            style={{ top: -10, zIndex: 2 }}
          >
            <Button
              className={style.heroButton}
              style={{ position: "relative", zIndex: 1 }}
            >
              {t("SEE_SIMULATORS")}
            </Button>
          </Badge.Ribbon>
          <Button className={style.heroButton_shadow}>
            {t("SEE_SIMULATORS")}
          </Button>
        </motion.div>{" "}
      </Link>
      <motion.div
        className="w-[300px] flex gap-5"
        style={{ fontSize: "1rem" }}
        variants={itemVariants}
      >
        <div
          style={{
            borderRight: "2px solid var(--color-primary)",
            padding: "10px",
          }}
        >
          <div>15,2k</div>
          <div>{t("stats.activeUsers")}</div>
        </div>
        <div
          style={{
            borderRight: "2px solid var(--color-primary)",
            padding: "10px",
          }}
        >
          <div>15,2k</div>
          <div>{t("stats.currentSimulations")}</div>
        </div>
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <FaRegMoneyBill1 />
          </div>
          <div>{t("stats.budgetPlan")}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
