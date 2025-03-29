import React from "react";
import PropTypes from "prop-types";
import StepTitle from "../../Blocs/StepTitle/StepTitle";
import styles from "./FoyerStep.module.css";
import { useTranslation } from "react-i18next";
const FoyerStep = ({ stepKey, stepTitle, stepDescription, children }) => {
  const { t } = useTranslation();

  return (
    <div id={stepKey} className={styles.foyerStep}>
      <div className={styles.step}>
        {t("simu_foyer.step1.step", { stepKey })}
      </div>
      <StepTitle title={stepTitle} />
      {stepDescription && <p>{stepDescription}</p>}
      {children}
    </div>
  );
};

// ✅ Type Checking with PropTypes
FoyerStep.propTypes = {
  stepKey: PropTypes.string.isRequired, // Unique ID for the div
  stepTitle: PropTypes.string.isRequired,
  stepDescription: PropTypes.string,
  children: PropTypes.node,
};

// ✅ Default Props to prevent errors
FoyerStep.defaultProps = {
  stepDescription: "",
};

export default FoyerStep;
