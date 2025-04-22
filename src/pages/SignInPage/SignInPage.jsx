import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./SignInPage.module.css";
import { motion } from "framer-motion";

//import keycloakInstance from "../../services/keycloak";
const SignInPage = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    setIsLoading(true); // Reset loading state on error

    try {
      // Simulate an asynchronous task (like an API call) before redirect
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay for the demo

      // Now perform the redirection
      window.location.href = import.meta.env.VITE_BACKEND_URL + "/auth/login"; // Your backend route
    } catch (error) {
      console.error("Error during sign-up:", error);
      setIsLoading(false); // Reset loading state on error
    }
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
          <h1 className={styles.mainTitle}>{t("signInRegister")}</h1>
        </header>
        <div className={styles.grid}>
          <Button onClick={handleSignUp} loading={isLoading}>
            <figure>
              <div
                style={{
                  maxHeight: "44px",
                  flex: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                  alignItems: "center",
                  gap: "var(--gap-lg)",
                }}
              >
                <motion.div
                  initial={{ scale: 1.2, y: 200, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  whileTap={{ scale: 0.9 }} // Bounce effect on click
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    delay: 1,
                  }}
                >
                  <MdMarkEmailRead
                    style={{ fontSize: "30px", color: "var(--color-primary)" }}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 1.2, y: 200, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  whileTap={{ scale: 0.9 }} // Bounce effect on click
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    delay: 1.05,
                  }}
                >
                  {" "}
                  +{" "}
                </motion.div>
                <motion.div
                  initial={{ scale: 1.2, y: 200, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  whileTap={{ scale: 0.9 }} // Bounce effect on click
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    delay: 1.1,
                  }}
                >
                  <FcGoogle
                    style={{ color: "var(--color-primary)", fontSize: "30px" }}
                  />
                </motion.div>
              </div>
              <motion.figcaption
                initial={{ scale: 1.2, y: 200, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                whileTap={{ scale: 0.9 }} // Bounce effect on click
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 10,
                  delay: 1.15,
                }}
                style={{ textTransform: "uppercase", fontSize: "1rem" }}
              >
                {t("emailAddress")} / {t("gmail")}
              </motion.figcaption>
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
