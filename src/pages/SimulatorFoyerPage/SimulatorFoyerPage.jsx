/* eslint-disable no-undef */
import React, { useState, useCallback } from "react";
import styles from "./SimulatorFoyerPage.module.css";
import SimulateurView from "./Blocs/SimulateurView/SimulateurView";
import { useTranslation } from "react-i18next";
import { Button, Steps, message } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import onde from "/assets/images/svg/onde-simu-v2.svg";
import SimulateurView2 from "./Blocs/SimulateurView2/SimulateurView2";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../reducers/applicationService/applicationSlice";
const SimulatorFoyerPage = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  // Steps data with internationalization
  const steps = [
    { title: t("simu_foyer.step1.step1_title"), content: <SimulateurView /> },
    { title: t("simu_foyer.step2.step2_title"), content: <SimulateurView2 /> },
    { title: t("simu_foyer.step3.step3_title"), content: t("Last-content") },
    { title: t("simu_foyer.step4.step4_title"), content: t("Last-content") },
    { title: t("simu_foyer.step5.step5_title"), content: t("Last-content") },
    { title: t("simu_foyer.step6.step6_title"), content: t("Last-content") },
  ];

  // Memoized handlers to prevent unnecessary re-renders
  const next = useCallback(() => {
    setCurrent((prev) => {
      const newStep = prev + 1;
      dispatch(setCurrentStep(newStep)); // ✅ pass a number, not a function
      return newStep;
    });
  }, [dispatch]);

  const prev = useCallback(() => {
    setCurrent((prev) => {
      const newStep = prev - 1;
      dispatch(setCurrentStep(newStep)); // ✅ pass a number, not a function
      return newStep;
    });
  }, [dispatch]);
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
              style={{ color: "#cb4b4b", fontWeight: 900 }}
              type="link"
              onClick={null}
              icon={<FaTrash />}
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
