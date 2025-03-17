import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import ConfigProvider from "antd/es/config-provider";
import Space from "antd/es/space";

import "antd/es/config-provider/style";
import "antd/es/space/style";
import "antd/es/tooltip/style";

import style from "./navbar.module.css";

//__COMPONENTS
import NavItem from "./NavItem/NavItem";
import LoginButton from "../../CoreComponents/LoginButton/LoginButton";

// Navbar component
const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Nav items definition
  const navItems = [
    { title: t("Accueil"), key: "/" },
    { title: t("Vosservices"), key: "/droits-sociaux/Vosservices" },
    {
      title: t("Vosevenementsdevie"),
      key: "/droits-sociaux/Vosevenementsdevie",
    },
  ];

  // Check if current path matches the key for active state
  const isActive = (key) => location.pathname === key;

  return (
    <Space>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              fontFamily: "var(--primary-font)",
              textTextColor: "#19355c !important",
            },
          },
        }}
      >
        <ul className={style.nav}>
          {navItems.map((item) => (
            <NavItem
              key={item.key}
              title={item.title}
              to={item.key}
              isActive={isActive(item.key)}
            />
          ))}
          <li>
            <LoginButton />
          </li>
        </ul>
      </ConfigProvider>
    </Space>
  );
};

export default Navbar;
