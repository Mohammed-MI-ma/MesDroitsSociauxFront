/* eslint-disable no-undef */
import React, { useState, useCallback, useContext } from "react";
import styles from "./SimulatorFoyerPage.module.css";
import SimulateurView from "./Blocs/SimulateurView/SimulateurView";
import { useTranslation } from "react-i18next";
import onde from "/assets/images/svg/onde-simu-v2.svg";
import SimulateurView2 from "./Blocs/SimulateurView2/SimulateurView2";
import { useDispatch } from "react-redux";
import LanguageContext from "../../LanguageContext";

import { setCurrentStep } from "../../reducers/applicationService/applicationSlice";
import StepperFooter from "./StepperFooter/StepperFooter";
import AdBannerAdult from "../../components/CoreComponents/AdBannerAdult/AdBannerAdult";
const SimulatorFoyerPage = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);

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
      <h1
        style={{
          fontSize: "1.6rem",
          fontWeight: 900,
          textAlign: "center",
          color: "var(--color-primary)",
        }}
      >
        {t("SEE_SIMULATORS")}
      </h1>
      <h2
        style={{
          fontSize: "1rem",
          fontWeight: 900,
          textAlign: "center",
          color: "var(--color-primary)",
          marginBottom: "calc( 3 * var(--gap-xl) )",
        }}
      >
        {t("DISCOVER_SOCIAL_BENEFITS")}
      </h2>
      <AdBannerAdult />
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
      <StepperFooter
        current={current}
        steps={steps}
        prev={prev}
        next={next}
        language={language}
      />
    </main>
  );
};

export default SimulatorFoyerPage;
