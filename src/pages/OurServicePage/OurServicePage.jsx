import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../../components/CoreComponents/HeroSection/HeroSection";
import ourServices from "/assets/images/svg/ourServices.svg";

//__STYLE
import style from "./OurServicePage.module.css";
import MatGrid from "../../components/RefinedComponents/ServicesContainer/MatGrid/MatGrid";
import MatGridTile from "../../components/RefinedComponents/ServicesContainer/MatGridTile/MatGridTile";
import { Link } from "react-router-dom";
import ourService from "/assets/images/svg/papers.svg";
import LanguageContext from "../../LanguageContext";

const OurServicePage = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <main className={style.prepare_info__container}>
      <HeroSection illustration={ourServices} without>
        <h1 className={style.prepare_info__title}>
          {t("services.VOS SERVICES")}
        </h1>
        <p>
          {t(
            "mesdroitssociaux.gouv.fr vous permet de consulter l'ensemble de vos droits sociaux, vos ressources, les données de votre activité professionnelle et de simuler vos aides"
          )}
        </p>
      </HeroSection>

      <section
        style={{
          paddingTop: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          flexDirection: "column",
        }}
      >
        <MatGrid>
          <MatGridTile>
            <div className={style.servicesContent}>
              <div className="flex justify-center items-center">
                <img src={ourService} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 className={style.servicesTitle}>{t("SEE_SIMULATORS")}</h2>
                <p className={style.description}>
                  {t("DISCOVER_SOCIAL_BENEFITS")}
                </p>
                <Link to={`/${language}/votre-simulateur/accueil`}>
                  <Button style={{ fontSize: "12px" }}>
                    {t("PERFORM_SIMULATION")}
                  </Button>
                </Link>
              </div>
            </div>
          </MatGridTile>
          <MatGridTile>
            <div className={style.servicesContent}>
              <div className="flex justify-center items-center">
                <img src={ourService} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 className={style.servicesTitle}>{t("SEE_SIMULATORS")}</h2>
                <p className={style.description}>
                  {t("DISCOVER_SOCIAL_BENEFITS")}
                </p>
                <Link to={`/${language}/votre-simulateur/accueil`}>
                  <Button style={{ fontSize: "12px" }}>
                    {t("PERFORM_SIMULATION")}
                  </Button>
                </Link>
              </div>
            </div>
          </MatGridTile>{" "}
          <MatGridTile>
            <div className={style.servicesContent}>
              <div className="flex justify-center items-center">
                <img src={ourService} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 className={style.servicesTitle}>{t("SEE_SIMULATORS")}</h2>
                <p className={style.description}>
                  {t("DISCOVER_SOCIAL_BENEFITS")}
                </p>
                <Link to={`/${language}/votre-simulateur/accueil`}>
                  <Button style={{ fontSize: "12px" }}>
                    {t("PERFORM_SIMULATION")}
                  </Button>
                </Link>
              </div>
            </div>
          </MatGridTile>{" "}
          <MatGridTile>
            <div className={style.servicesContent}>
              <div className="flex justify-center items-center">
                <img src={ourService} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 className={style.servicesTitle}>{t("SEE_SIMULATORS")}</h2>
                <p className={style.description}>
                  {t("DISCOVER_SOCIAL_BENEFITS")}
                </p>
                <Link to={`/${language}/votre-simulateur/accueil`}>
                  <Button style={{ fontSize: "12px" }}>
                    {t("PERFORM_SIMULATION")}
                  </Button>
                </Link>
              </div>
            </div>
          </MatGridTile>{" "}
          <MatGridTile>
            <div className={style.servicesContent}>
              <div className="flex justify-center items-center">
                <img src={ourService} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 className={style.servicesTitle}>{t("SEE_SIMULATORS")}</h2>
                <p className={style.description}>
                  {t("DISCOVER_SOCIAL_BENEFITS")}
                </p>
                <Link to={`/${language}/votre-simulateur/accueil`}>
                  <Button style={{ fontSize: "12px" }}>
                    {t("PERFORM_SIMULATION")}
                  </Button>
                </Link>
              </div>
            </div>
          </MatGridTile>{" "}
          <MatGridTile>
            <div className={style.servicesContent}>
              <div className="flex justify-center items-center">
                <img src={ourService} />
              </div>
              <div style={{ flex: 1 }}>
                <h2 className={style.servicesTitle}>{t("SEE_SIMULATORS")}</h2>
                <p className={style.description}>
                  {t("DISCOVER_SOCIAL_BENEFITS")}
                </p>
                <Link to={`/${language}/votre-simulateur/accueil`}>
                  <Button style={{ fontSize: "12px" }}>
                    {t("PERFORM_SIMULATION")}
                  </Button>
                </Link>
              </div>
            </div>
          </MatGridTile>{" "}
        </MatGrid>
      </section>
    </main>
  );
};

export default OurServicePage;
