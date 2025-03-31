import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  const { t } = useTranslation();

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
          <Badge.Ribbon
            className=" shadow-lg animate__tada animate__animated  animate__infinite animate__slow"
            text={t("NEW_FEATURE")}
            color="pink"
            placement="start"
            style={{ top: -10 }}
          >
            <Button className={styles.button}>
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
                  <FaSms
                    style={{ color: "var(--color-primary)", fontSize: "40px" }}
                  />
                </div>
                <figcaption>{t("otpSent")}</figcaption>
              </figure>
            </Button>{" "}
          </Badge.Ribbon>
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
              <figcaption>EMAIL</figcaption>
            </figure>
          </Button>
          <Button>
            <figure>
              <div style={{ maxHeight: "44px", flex: 1, width: "100%" }}>
                <img src={null}></img>
              </div>
              <figcaption>Gmail</figcaption>
            </figure>
          </Button>
          <Button>
            <figure>
              <div style={{ maxHeight: "44px", flex: 1, width: "100%" }}>
                <img src={null}></img>
              </div>
              <figcaption>Facebook</figcaption>
            </figure>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
