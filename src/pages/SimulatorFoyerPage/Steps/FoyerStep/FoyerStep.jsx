import React from "react";
import PropTypes from "prop-types";
import StepTitle from "../../Blocs/StepTitle/StepTitle";

const FoyerStep = ({ stepKey, stepTitle, stepDescription, children }) => {
  return (
    <div id={stepKey}>
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
