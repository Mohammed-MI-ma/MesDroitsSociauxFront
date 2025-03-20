import React from "react";
import style from "./heroContent.module.css";
import { Badge, Button } from "antd";
import { useTranslation } from "react-i18next";

const HeroContent = () => {
  let { t } = useTranslation();
  return (
    <div className={style.heroContent}>
      <h1>{t("MESDROITSSOCIAUX")}</h1>
      <Badge.Ribbon
        text={t("NEW_FEATURE")}
        color="pink"
        placement="start"
        style={{ top: -10 }}
      >
        <Button type="primary" className={style.heroButton}>
          {t("SEE_SIMULATORS")}
        </Button>
      </Badge.Ribbon>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        {t("CONSULT_RIGHTS")}
      </p>
      <small> {t("disclaimer")}</small>
    </div>
  );
};

export default HeroContent;
