/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import Dropdown from "antd/es/dropdown";
import Button from "antd/es/button";
import "antd/es/button/style";
import "antd/es/dropdown/style";

import style from "./appHeader.module.css";
import ResponsiveLogo from "../ResponsiveLogo/ResponsiveLogo";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import PropTypes from "prop-types";
import LoginButton from "../../CoreComponents/LoginButton/LoginButton";
import LanguageSwitcher from "../../CoreComponents/LanguageSwitcher/LanguageSwitcher";
import { Divider, Progress } from "antd";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../AuthProvider";
import LogoutButton from "../../CoreComponents/LogoutButton/LogoutButton";
import LanguageContext from "../../../LanguageContext";
const AppHeader = () => {
  const { t } = useTranslation();
  const { isAuthenticated, user } = useAuth(); // Get authentication status from context
  const { language } = useContext(LanguageContext);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  const items = [
    {
      label: <Link to={`/${language}`}>{t("Accueil")}</Link>,
      key: "0",
    },
    {
      label: (
        <Link to={`/${language}/droits-sociaux/Vosservices`}>
          {t("Vosservices")}
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link to={`/${language}/droits-sociaux/Vosevenementsdevie`}>
          {t("Vosevenementsdevie")}
        </Link>
      ),
      key: "3",
    },
  ];

  return (
    <motion.header
      className={`${style.header} `}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center w-full">
        <Link to={`/${language}`}>
          <ResponsiveLogo />
        </Link>
        {isAuthenticated && (
          <div className={style.profile}>
            <div>
              <Avatar
                style={{ background: "var(--color-text)" }}
                size="small"
                icon={<PiBellSimpleRingingFill />}
              />
              &nbsp;
              <Badge
                status="warning"
                placement="start"
                dot={!user.email_verified}
              >
                <Avatar
                  style={{ background: "var(--color-text)" }}
                  size="small"
                  icon={<AiOutlineUser />}
                />
              </Badge>
            </div>
            <div className={style.profileInfos}>
              <div>{user.name}</div>
              <div>
                <div>Solde disponible</div>
                <Progress size="small" percent={100}></Progress>
              </div>
            </div>
          </div>
        )}
        <div className={`${style.navBarContainer}`}>
          <Navbar />{" "}
          <Divider type="vertical" style={{ backgroundColor: "black" }} />{" "}
          <LanguageSwitcher />
        </div>
      </div>
      <div className={`${style.navBarMobile}`}>
        <div className="flex flex-col items-center">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                shape="circle"
                size="large"
                icon={
                  <GiHamburgerMenu
                    style={{ fontSize: "30px", color: "var(--color-primary)" }}
                  />
                }
                type="text"
              />
              <p
                style={{
                  fontSize: "10px",
                  margin: "0px",
                  color: "var(--color-primary)",
                }}
              >
                {t("MENU")}
              </p>
            </div>
          </Dropdown>
        </div>
        <div className="flex flex-col ">
          <div>{t("LANG")}</div>
          <LanguageSwitcher />
        </div>
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </div>
    </motion.header>
  );
};

export default AppHeader;
// Prop validation for more robust code
AppHeader.propTypes = {
  logoAltText: PropTypes.string, // Ensure alt text for logo is a string
};
