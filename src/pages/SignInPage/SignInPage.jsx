import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
const SignInPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Breadcrumb
        className="shadow-lg flex items-center px-5"
        items={[
          {
            title: <Link to="/">{t("Accueil")}</Link>,
          },

          {
            title: (
              <span style={{ fontWeight: 900 }}>Connexion - Inscription</span>
            ),
          },
        ]}
      />
      <main className={styles.container}>
        <header className={styles.titleHeader}>
          <h1>Connexion en cours sur mesdroitssociaux.gouv.fr</h1>
          <h2>Choisissez un compte pour vous connecter :</h2>
        </header>
      </main>
    </div>
  );
};

export default SignInPage;
