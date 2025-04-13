import React from "react";
import { motion } from "framer-motion";

//__COMPONENTS
import HeroContent from "./HeroContent/HeroContent";

//__ASSETS
import rightBlocGraphic from "/assets/images/svg/family.svg";

import leftBlocGraphic from "/assets/images/head-banner-left.svg";

//__STYLING
import style from "./heroSection.module.css";

const HeroSection = () => {
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
          initial={{ opacity: 0, scale: 0.8, rotate: 10, x: 200 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
          transition={{
            duration: 1.25,
            delay: 0.3,
            type: "spring",
            stiffness: 30,
            damping: 10,
          }}
          style={{
            backgroundImage: `url(${rightBlocGraphic})`,
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
