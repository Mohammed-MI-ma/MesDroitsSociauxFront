import React from "react";
import style from "./heroContent.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroContent = () => {
  let { t } = useTranslation();
  return (
    <div className={style.heroContent}>
      <h1>{t("MESDROITSSOCIAUX")}</h1>
      <Badge.Ribbon
        className=" shadow-lg "
        text={t("NEW_FEATURE")}
        color="pink"
        placement="start"
        style={{ top: -10 }}
      >
        <Link to="/votre-simulateur/accueil">
          <Button type="primary" className={style.heroButton}>
            {t("SEE_SIMULATORS")}
          </Button>
        </Link>
      </Badge.Ribbon>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        {t("CONSULT_RIGHTS")}
      </p>
      <small> {t("disclaimer")}</small>
    </div>
  );
};

export default HeroContent;
