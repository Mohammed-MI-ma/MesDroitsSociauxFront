import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import style from "./navbar.module.css";

//__COMPONENTS
import NavItem from "./NavItem/NavItem";
import LoginButton from "../../CoreComponents/LoginButton/LoginButton";
import { useAuth } from "../../AuthProvider";
import LogoutButton from "../../CoreComponents/LogoutButton/LogoutButton";
import LanguageContext from "../../../LanguageContext";

// Navbar component
const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { isAuthenticated } = useAuth(); // Get authentication status from context
  const { language } = useContext(LanguageContext);

  // Nav items definition
  const navItems = [
    { title: t("Accueil"), key: `/${language}` },
    { title: t("Vosservices"), key: `/${language}/droits-sociaux/Vosservices` },
    {
      title: t("Vosevenementsdevie"),
      key: `/${language}/droits-sociaux/Vosevenementsdevie`,
    },
    {
      title: t("SEE_SIMULATORS"),
      key: `/${language}/votre-simulateur/accueil`,
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
            {isAuthenticated && (
              <Avatar
                style={{ background: "var(--color-primary)" }}
                size="large"
              />
            )}
          </li>
          <li>{!isAuthenticated ? <LoginButton /> : <LogoutButton />}</li>
        </ul>
      </ConfigProvider>
    </Space>
  );
};

export default Navbar;
