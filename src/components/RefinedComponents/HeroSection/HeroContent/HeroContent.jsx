import React from "react";
import style from "./heroContent.module.css";
import { Link } from "react-router-dom";

import { Button } from "antd";
import { useTranslation } from "react-i18next";

const HeroContent = () => {
  let { t } = useTranslation();
  return (
    <div className={style.heroContent}>
      <h1>{t("MESDROITSSOCIAUX")}</h1>
      <Button type="primary" className={style.heroButton}>
        {t("SEE_SIMULATORS")}
      </Button>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        {t("CONSULT_RIGHTS")}
      </p>
      <small> {t("disclaimer")}</small>
    </div>
  );
};

export default HeroContent;
