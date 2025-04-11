import React, { useContext } from "react";
import style from "./heroContent.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageContext from "../../../../LanguageContext";

const HeroContent = () => {
  let { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <div className={style.heroContent}>
      <h1>{t("MESDROITSSOCIAUX")}</h1>
      <h2>{t("slogan")}</h2>
      <Badge.Ribbon
        className=" shadow-lg "
        text={t("NEW_FEATURE")}
        color="pink"
        placement="start"
        style={{ top: -10 }}
      >
        <Link to={`/${language}/votre-simulateur/accueil`}>
          <Button type="primary" className={style.heroButton}>
            {t("SEE_SIMULATORS")}
          </Button>
        </Link>
      </Badge.Ribbon>

      <p style={{ fontSize: "12px", marginTop: "20px" }}>
        {t("CONSULT_RIGHTS")}
      </p>
      <small> {t("disclaimer")}</small>
    </div>
  );
};

export default HeroContent;
