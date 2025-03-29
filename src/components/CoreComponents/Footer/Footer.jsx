import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ConfigProvider, Button } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  // Memoized footer links for performance optimization
  const footerLinks = useMemo(
    () => [
      { path: "/faq", label: t("footer.faq") },
      { path: "/contact", label: t("footer.contact") },
      { path: "/about", label: t("footer.about") },
      { path: "/legal", label: t("footer.legal") },
      { path: "/cookies", label: t("footer.cookies") },
      { path: "/accessibility", label: t("footer.accessibility") },
      { path: "/sitemap", label: t("footer.sitemap") },
    ],
    [t]
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          defaultBg: "white",
        },
      }}
    >
      <footer className={styles.contentinfo}>
        <div className={styles.elementsFooter}>
          <ul className={styles.itemWrapper}>
            {footerLinks.map(({ path, label }) => (
              <li key={path} className={styles.listItem}>
                <Link to={path}>
                  <Button type="text" className={styles.footerButton}>
                    {label}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </ConfigProvider>
  );
};

export default Footer;
