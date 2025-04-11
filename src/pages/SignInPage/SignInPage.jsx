import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./SignInPage.module.css";
//import keycloakInstance from "../../services/keycloak";
const SignInPage = () => {
  const { t } = useTranslation();

  const handleSignUp = () => {
    window.location.href = import.meta.env.VITE_BACKEND_URL + "/auth/login"; // Your backend route
  };
  return (
    <div className={styles.pageWrapper}>
      <Breadcrumb
        className=""
        items={[
          {
            title: <Link to="/">{t("Accueil")}</Link>,
          },
          {
            title: (
              <span className={styles.activeBreadcrumb}>
                {t("signInRegister")}
              </span>
            ),
          },
        ]}
      />
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>{t("signInProgress")}</h1>
          <h2 className={styles.subtitle}>{t("chooseAccount")}</h2>
        </header>
        <div className={styles.grid}>
          <Button onClick={handleSignUp}>
            <figure>
              <div
                style={{
                  maxHeight: "44px",
                  flex: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <MdMarkEmailRead
                  style={{ fontSize: "30px", color: "var(--color-primary)" }}
                />
              </div>
              <figcaption style={{ textTransform: "uppercase" }}>
                {t("emailAddress")}
              </figcaption>
            </figure>
          </Button>
          <Button>
            <figure>
              <div
                style={{
                  maxHeight: "44px",
                  flex: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FcGoogle
                  style={{ color: "var(--color-primary)", fontSize: "40px" }}
                />
              </div>
              <figcaption>{t("gmail")}</figcaption>
              <small>{t("comingSoon")}</small>
            </figure>
          </Button>
          {/*
          <Button>
            <figure>
              <div style={{ maxHeight: "44px", flex: 1, width: "100%" }}>
                <img src={null}></img>
              </div>
              <figcaption>Gmail</figcaption>
            </figure>
          </Button>
          <Button onClick={handleSignUp}>
            <figure>
              <div style={{ maxHeight: "44px", flex: 1, width: "100%" }}>
                <img src={null}></img>
              </div>
              <figcaption>Remplir formulare</figcaption>
            </figure>
          </Button>*/}
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
