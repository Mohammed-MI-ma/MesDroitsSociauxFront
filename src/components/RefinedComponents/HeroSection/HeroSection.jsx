import React from "react";

//__COMPONENTS
import HeroContent from "./HeroContent/HeroContent";

//__ASSETS
import rightBlocGraphic from "/assets/images/mes-droit-sociaux-accueil.svg";
import leftBlocGraphic from "/assets/images/head-banner-left.svg";

//__STYLING
import style from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <section className={style.hero}>
      <div className={style.leftBloc}>
        <div className={style.landingPageleftBloc}>
          <img src={leftBlocGraphic}></img>
        </div>
      </div>
      <HeroContent />
      <div className={style.rightBloc}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${rightBlocGraphic})`,
            backgroundSize: "cover" /* Ensures the entire image is visible */,
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
