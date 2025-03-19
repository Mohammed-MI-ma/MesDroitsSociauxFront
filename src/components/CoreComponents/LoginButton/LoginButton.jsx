import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//__ANTD
import "antd/es/avatar/style";

//__ICONS
import { RiLoginCircleFill } from "react-icons/ri";

//__STYLE
import style from "./loginButton.module.css";

const LoginButton = () => {
  const { t } = useTranslation();

  return (
    <Link to={"/authentication"}>
      <Button className={style.loginButton} type="text">
        <RiLoginCircleFill style={{ color: "var(--color-primary)" }} />
        <div>
          <p>{t("Seconnecter")}</p>
        </div>
      </Button>
    </Link>
  );
};

export default LoginButton;
