import React from "react";
import styles from "./SimulateurView.module.css";
import { useTranslation } from "react-i18next";
import { transform } from "framer-motion";

const SimulateurView = ({ children }) => {
  const { t } = useTranslation();
  return (
    <main className={styles.simulateurView}>
      <div>
        <div className={styles.etapeSimulateurView}>
          <div className={styles.etapeTitle}>
            <h1> {t("home")}</h1>
          </div>{" "}
          <p>
            Vous pouvez modifier sur cet écran la composition de votre foyer
            pour effectuer votre simulation.
          </p>
          <div className="flex w-full text-center gap-5 ">
            <div
              className="w-[50%] h-[200px] border flex justify-center items-center relative"
              style={{ fontSize: "30px", fontWeight: "900", overflow: "clip" }}
            >
              {" "}
              <Avatar
                size="large"
                icon={<MdModeEdit />}
                style={{
                  background: "#cb4b4b",
                  top: "0px",
                  right: "0",
                  position: "absolute",
                  transform: "translate(6px,-6px)",
                }}
              ></Avatar>
              <p>VOUS</p>
            </div>{" "}
            <div className="w-[50%] h-[200px] border flex justify-center items-center">
              <p>qsdqsd</p>
            </div>{" "}
          </div>
        </div>
      </div>{" "}
      <div className={styles.synthese}>qsdqsd</div>
    </main>
  );
};

export default SimulateurView;
