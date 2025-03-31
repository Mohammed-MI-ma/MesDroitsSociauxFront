import React from "react";
import styles from "./simulatorChoiceContent.module.css";
import { useTranslation } from "react-i18next";
import { IoMdInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const SimulatorChoiceContent = () => {
  const { t } = useTranslation();

  const formatter = (input, active) => {
    return (
      <div
        style={{ color: active ? "white" : "var(--color-primary)" }}
      >{`${input} ${t("Minutes")}`}</div>
    );
  };

  return (
    <div className={styles.simulatorChoiceContent}>
      <div className={styles.pageContent}>
        <h3>{t("QueVoulezVousSimuler")}</h3>

        {/* Description Section */}
        <div className={styles.simulatorDescription}>
          <IoMdInformationCircle />
          <div>
            <p>{t("TravailleurNonSalarie")}</p>
            <p>{t("ESATNote")}</p>
            <p>{t("SimulatorUpdate")}</p>
          </div>
        </div>

        {/* Grid Buttons */}
        <div className={styles.simulatorChoiceButtons}>
          <div className={`${styles.tileContainer} ${styles.blue}`}>
            <div className={styles.tileInfos}>
              <h1>{t("ToutesLesPrestations")}</h1>
              <div>
                {" "}
                <Progress
                  percent={15}
                  steps={10}
                  format={(percent) => formatter(percent, true)}
                />
              </div>

              <div className="mt-10">{t("EstimezLes2Aides")}</div>
            </div>
            <div>
              <Link to="/votre-simulateur/simu-foyer">
                <Button type="link">
                  {" "}
                  {t("SimulerToutesLesPrestations")}{" "}
                </Button>
              </Link>
            </div>
          </div>
          <div className={`${styles.tileContainer} `}>
            <div className={styles.tileInfos}>
              <h1>{t("ToutesLesPrestations")}</h1>
              <div>
                {" "}
                <Progress
                  percent={15}
                  steps={10}
                  format={(percent) => formatter(percent, false)}
                />
              </div>
              <div className="mt-10">{t("EstimezLes2Aides")}</div>
            </div>
            <div>
              <Link to="/votre-simulateur/simu-foyer">
                <Button type="link">
                  {" "}
                  {t("SimulerToutesLesPrestations")}{" "}
                </Button>
              </Link>
            </div>
          </div>
          <div className={`${styles.tileContainer} `}>
            <div className={styles.tileInfos}>
              <h1>{t("ToutesLesPrestations")}</h1>
              <div>
                {" "}
                <Progress
                  percent={15}
                  steps={10}
                  format={(percent) => formatter(percent)}
                />
              </div>
              <div className="mt-10">{t("EstimezLes2Aides")}</div>
            </div>
            <div>
              <Link to="/votre-simulateur/simu-foyer">
                <Button
                  type="link"
                  style={{ color: "white", fontWeight: "900" }}
                >
                  {" "}
                  {t("Simuler Toutes Les Prestations")}{" "}
                </Button>
              </Link>
            </div>
          </div>
          {/* Other similar grid tiles can be repeated here, same as above */}
        </div>
      </div>
    </div>
  );
};

export default SimulatorChoiceContent;
