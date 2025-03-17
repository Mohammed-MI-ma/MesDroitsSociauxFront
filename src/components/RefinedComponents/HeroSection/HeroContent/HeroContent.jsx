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
      <p>{t("CONSULT_RIGHTS")} </p>
      <Button type="primary" className={style.heroButton}>
        {t("SEE_SIMULATORS")}
      </Button>
      <Link to="/QuiSommesNous">
        <Button type="link" className={style.whoWeAre}>
          {t("WHO_ARE_WE")}
        </Button>
      </Link>
    </div>
  );
};

export default HeroContent;
