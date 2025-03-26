import React, { useMemo } from "react";
import styles from "./SimulateurView.module.css";
import { useTranslation } from "react-i18next";
import FoyerStep from "../../Steps/FoyerStep/FoyerStep";
import ButtonSimulateurAdd from "../../../../components/CoreComponents/ButtonSimulateurAdd/ButtonSimulateurAdd";

const SimulateurView = () => {
  const { t } = useTranslation();
  // Memoize the icons to avoid recalculating on every render
  const buttonConfigs = useMemo(
    () => [
      {
        icon: <FaRegUser />,
        text: t("you"),
        primary: true,
        editing: true,
      },
      {
        icon: <IoIosWoman />,
        text: t("simu_foyer.step1.ajouter_conjointe"),
        primary: false,
        editing: false,
      },
    ],
    [t]
  );
  return (
    <main className={styles.simulateurView}>
      <div>
        <div className={styles.etapeSimulateurView}>
          <FoyerStep
            stepTitle={t("simu_foyer.step1.step1_title")}
            stepDescription={t("simu_foyer.step1.step1_desc")}
            key={"Key"}
          >
            <>
              <div className="flex w-full text-center gap-5 items-center justify-center">
                {buttonConfigs.map(
                  ({ icon, text, primary, editing }, index) => (
                    <ButtonSimulateurAdd
                      key={index}
                      delay={index}
                      icon={icon}
                      primary={primary}
                      editing={editing}
                    >
                      {text}
                    </ButtonSimulateurAdd>
                  )
                )}
              </div>
              <div className="flex w-full text-center gap-5 items-center justify-center mt-10 sm:w-full">
                <div className="w-[50%] h-[100px] border flex justify-center items-center">
                  <p>célibataire</p>
                </div>
              </div>
            </>
          </FoyerStep>
        </div>
      </div>{" "}
      <div className={styles.synthese}>qsdqsd</div>
    </main>
  );
};

export default SimulateurView;
