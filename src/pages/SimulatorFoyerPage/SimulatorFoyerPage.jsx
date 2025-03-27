/* eslint-disable no-undef */
import React, { useState, useCallback } from "react";
import styles from "./SimulatorFoyerPage.module.css";
import SimulateurView from "./Blocs/SimulateurView/SimulateurView";
import { useTranslation } from "react-i18next";
import { Button, Steps, message } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import onde from "../../assets/images/svg/onde-simu-v2.svg";
const SimulatorFoyerPage = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  // Steps data with internationalization
  const steps = [
    { title: t("Foyer"), content: <SimulateurView /> },
    { title: t("SITUATION"), content: t("Second-content") },
    { title: t("LOGEMENT"), content: t("Last-content") },
    { title: t("RESSOURCES"), content: t("Last-content") },
    { title: t("PATRIMOINE"), content: t("Last-content") },
    { title: t("RESULTATS"), content: t("Last-content") },
  ];

  // Memoized handlers to prevent unnecessary re-renders
  const next = useCallback(() => setCurrent((prev) => prev + 1), []);
  const prev = useCallback(() => setCurrent((prev) => prev - 1), []);

  return (
    <main className={styles.container}>
      {/* Steps Navigation */}
      <div className="relative">
        <Steps
          current={current}
          items={steps}
          size="large"
          className={styles.steps}
        />
        <img src={onde} className="absolute top-0"></img>
      </div>

      {/* Step Content */}
      <div className={styles.contentStyle}>{steps[current].content}</div>

      {/* Footer Buttons */}
      <footer className="flex flex-col items-center gap-3">
        {current < steps.length - 1 && (
          <div className="flex flex-col items-center w-full">
            <Button
              type="primary"
              onClick={next}
              icon={<IoIosArrowForward />}
              style={{ backgroundColor: "var(--color-secondary)" }}
              className={styles.nextButton}
            >
              {t("Suivant")}
            </Button>

            <Button
              type="link"
              onClick={next}
              icon={<IoIosArrowForward />}
              className={styles.nextButton}
            >
              {t("Reinitialiser")}
            </Button>
          </div>
        )}

        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success(t("Processing complete!"))}
          >
            {t("Done")}
          </Button>
        )}

        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={prev}>
            {t("Previous")}
          </Button>
        )}
      </footer>
    </main>
  );
};

export default SimulatorFoyerPage;
