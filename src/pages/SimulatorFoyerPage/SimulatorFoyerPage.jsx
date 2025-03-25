/* eslint-disable no-undef */
import React, { useState } from "react";
import styles from "./SimulatorFoyerPage.module.css";
import SimulateurView from "./Blocs/SimulateurView/SimulateurView";
const steps = [
  {
    title: "Foyer",
    content: <SimulateurView>HEllo</SimulateurView>,
  },
  {
    title: "SITUATION",
    content: "Second-content",
  },
  {
    title: "LOGEMENT",
    content: "Last-content",
  },
  {
    title: "RESSOURCES",
    content: "Last-content",
  },
  {
    title: "PATRIMOINE",
    content: "Last-content",
  },
  {
    title: "RESULTATS",
    content: "Last-content",
  },
];
const SimulatorFoyerPage = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className={styles.container}>
      <Steps
        current={current}
        items={items}
        size="small"
        className={styles.steps}
      />
      <div style={contentStyle} className={styles.contentStyle}>
        {steps[current].content}
      </div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default SimulatorFoyerPage;
