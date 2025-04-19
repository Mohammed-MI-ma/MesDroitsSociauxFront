import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

//__ILLUSTRATION
import simulateur from "/assets/images/svg/illus-votre-simulateur.svg";

import HeroSection from "@/components/CoreComponents/HeroSection/HeroSection";
import CardsLandingGroup from "@/components/RefinedComponents/CardsLandingGroup/CardsLandingGroup";
import SimulatorChoiceContent from "@/components/RefinedComponents/SimulatorChoiceContent/SimulatorChoiceContent";
import FAQAccodion from "@/components/CoreComponents/FAQAccodion/FAQAccodion";
import {
  containerVariants,
  itemVariants,
} from "@/components/RefinedComponents/HeroSection/HeroContent/HeroContent";
import SponsorshipList from "@/components/CoreComponents/SponsorshipList/SponsorshipList";

//__STYLES
import styles from "./SimulatorPage.module.css";

const SimulatorPage = () => {
  const { t } = useTranslation();
  // Function to handle scroll
  const scrollToSection = () => {
    const section = document.getElementById("targetSection");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={{ flex: "1", minHeight: "calc(100vh - 200px)" }}>
      <HeroSection illustration={simulateur} without>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative"
            variants={itemVariants}
            onClick={scrollToSection}
          >
            <Badge.Ribbon
              text={t("NEW_FEATURE")}
              color={"var(--color-red)"}
              placement="start"
              style={{ top: -10, zIndex: 2 }}
            >
              <Button
                className={styles.heroButton}
                style={{ position: "relative", zIndex: 1 }}
              >
                {t("SEE_SIMULATORS")}
              </Button>
            </Badge.Ribbon>
            <Button className={styles.heroButton_shadow}>
              {t("SEE_SIMULATORS")}
            </Button>
          </motion.div>

          <motion.h2 variants={itemVariants}>
            {t("retentionPortalInfo")}
          </motion.h2>

          <motion.h3 className={styles.description} variants={itemVariants}>
            {t("DECOUVRIR_PRESTATIONS")}:
          </motion.h3>

          <SponsorshipList />
        </motion.div>
      </HeroSection>
      <CardsLandingGroup />
      <div id="targetSection">
        <SimulatorChoiceContent />
      </div>
      <FAQAccodion />
    </main>
  );
};

export default SimulatorPage;
