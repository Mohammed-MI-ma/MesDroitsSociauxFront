import React, { useContext } from "react";
import { motion } from "framer-motion";

//__COMPONENTS
import HeroContent from "./HeroContent/HeroContent";

//__ASSETS
import rightBlocGraphic from "/assets/images/iPhone14.webp";
import rightBlocGraphic_ar from "/assets/images/iPhone14_ar.webp";
import leftBlocGraphic from "/assets/images/head-banner-left.svg";

//__STYLING
import style from "./heroSection.module.css";
import LanguageContext from "../../../LanguageContext";

const HeroSection = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className={`${style.hero}`}>
      <motion.div
        className={style.leftBloc}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 10,
          damping: 12,
          duration: 3,
          delay: 1,
        }}
      >
        <div className={style.landingPageleftBloc}>
          <img src={leftBlocGraphic} alt="left bloc graphic" />
        </div>
      </motion.div>
      <HeroContent />
      <div className={style.rightBloc}>
        <motion.div
          className="h-full"
          initial={{ opacity: 0, scale: 0.6, rotate: 5, y: 80 }}
          animate={{
            opacity: 1,
            scale: [0.6, 1.07, 1.07, 1],
            rotate: 0,
            y: 0,
          }}
          transition={{
            scale: {
              duration: 1.4,
              times: [0, 0.5, 0.85, 1],
              ease: ["easeOut", "linear", "easeInOut"],
            },
            opacity: { duration: 0.6, delay: 0.1 },
            rotate: { duration: 1.2 },
            y: { duration: 1.2 },
            delay: 0.3,
          }}
          style={{
            backgroundImage: `url(${
              language === "ar" ? rightBlocGraphic_ar : rightBlocGraphic
            })`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
/** */
