import React from "react";
import styles from "./SimulatorChoiceContent.module.css";
import { useTranslation } from "react-i18next";
import { IoMdInformationCircle } from "react-icons/io";

const SimulatorChoiceContent = () => {
  const { t } = useTranslation();

  const formatter = (input) => {
    return <p style={{ color: "white" }}>{`${input} ${t("Minutes")}`}</p>;
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
                  format={(percent) => formatter(percent)}
                />
              </div>
              <div className="mt-10">{t("EstimezLes2Aides")}</div>
            </div>
            <div>
              <Button type="link"> Simuler toutes les prestations </Button>
            </div>
          </div>
          <div className={`${styles.tileContainer} `}>
            <div className={styles.tileInfos}>
              <h1>{t("ToutesLesPrestations")}</h1>
              <div>
                <Progress
                  percent={15}
                  steps={10}
                  format={(percent) => formatter(percent)}
                />
              </div>
              <div className="mt-10">Estimez les 58 aides simultanément</div>
            </div>
            <div>
              <Button type="link"> Simuler toutes les prestations </Button>
            </div>
          </div>{" "}
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
              <div className="mt-10">Estimez les 58 aides simultanément</div>
            </div>
            <div>
              <Button type="link"> Simuler toutes les prestations </Button>
            </div>
          </div>{" "}
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
              <div className="mt-10">Estimez les 58 aides simultanément</div>
            </div>
            <div>
              <Button type="link"> Simuler toutes les prestations </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorChoiceContent;
