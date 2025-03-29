import React, { useState } from "react";
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
  // State to control popover visibility
  const [open, setOpen] = useState(true);

  const hide = () => {
    setOpen(false); // Close popover
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen); // Toggle popover visibility
  };

  return (
    <Link to={"/authentication"}>
      <Popover
        color="var(--color-primary)"
        content={
          <div style={{ maxWidth: "400px", color: "white" }}>
            {t("tooltip.content")}

            <a onClick={hide}> {t("tooltip.Fermer")}</a>
          </div>
        }
        title={<h1 style={{ color: "white" }}>{t("tooltip.title")}</h1>}
        trigger="click"
        open={open} // Controlled open state
        onOpenChange={handleOpenChange} // Handle opening and closing
        getPopupContainer={(triggerNode) => triggerNode.parentNode} // Ensure popover is within the same container
      >
        <Button className={style.loginButton} type="text">
          <RiLoginCircleFill style={{ color: "var(--color-primary)" }} />
          <div>
            <p>{t("Seconnecter")}</p>
          </div>
        </Button>
      </Popover>
    </Link>
  );
};

export default LoginButton;
