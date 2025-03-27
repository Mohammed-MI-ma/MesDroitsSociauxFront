import React, { useMemo, useRef } from "react";
import styles from "./SimulateurView.module.css";
import { useTranslation } from "react-i18next";
import FoyerStep from "../../Steps/FoyerStep/FoyerStep";
import ButtonSimulateurAdd from "../../../../components/CoreComponents/ButtonSimulateurAdd/ButtonSimulateurAdd";
import ChefMenage from "../ChefMenage/ChefMenage";
import Conjointe from "../Conjointe/Conjointe";

import { useSelector } from "react-redux";
import { findByRangCode } from "../../../../reducers/applicationService/applicationSlice";
//"../../assets/images/bgBlocTop.png";
const SimulateurView = () => {
  const { t } = useTranslation();
  const chefMenageRef = useRef(null);
  const conjointeRef = useRef(null);

  const rangCodeToFind = "CF";
  const chefMenage = useSelector((state) =>
    findByRangCode(state, rangCodeToFind)
  );

  // Memoize the icons to avoid recalculating on every render
  const buttonConfigs = useMemo(
    () => [
      {
        icon: <FaRegUser />,
        text: chefMenage ? (
          <div className="text-left">
            <div style={{ fontSize: "12px", fontWeight: "100" }}>
              {t("you")}
            </div>
            <div style={{ fontSize: "30px" }}>{chefMenage.prenom} </div>
            <div style={{ fontSize: "12px" }}>{chefMenage.dateNaissance} </div>
          </div>
        ) : (
          t("you")
        ),
        primary: true,
        editing: true,
        modal: {
          id: "CHEF_MENAGE",
          title: t("personal_data"),
          body: <ChefMenage ref={chefMenageRef} />,
          validate: async () => {
            const isValid = await chefMenageRef.current?.validateForm(); // Ensure it's a boolean value
            console.log("Validation ", isValid);
            if (!isValid.status) {
              console.log("Validation failed");
              return isValid;
            }
            return isValid;
          },
        },
      },
      {
        icon: <IoIosWoman />,
        text: t("simu_foyer.step1.ajouter_conjointe"),
        primary: false,
        editing: false,
        modal: {
          id: "CONJOINTE",
          title: "Votre situation matrimoniale",
          body: <Conjointe ref={conjointeRef} />,
          validate: async () => {
            const isValid = await chefMenageRef.current?.validateForm(); // Ensure it's a boolean value
            console.log("Validation ", isValid);
            if (!isValid.status) {
              console.log("Validation failed");
              return isValid;
            }
            return isValid;
          },
        },
      },
    ],
    [chefMenage, t]
  );

  const buttonConfigs1 = useMemo(
    () => [
      {
        icon: <IoIosWoman />,
        text: t("simu_foyer.step1.ajouter_conjointe"),
        primary: false,
        editing: false,
      },
      {
        icon: <IoIosWoman />,
        text: t("simu_foyer.step1.ajouter_conjointe"),
        primary: false,
        editing: false,
      },
      {
        icon: <IoIosWoman />,
        text: t("simu_foyer.step1.ajouter_conjointe"),
        primary: false,
        editing: false,
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
            key="Key"
          >
            <div className={styles.individusContainer} id="parents">
              {buttonConfigs.map(
                ({ icon, text, primary, editing, modal }, idx) => (
                  <ButtonSimulateurAdd
                    key={`${text}-${idx}`}
                    delay={idx * 0.5}
                    icon={icon}
                    primary={primary}
                    editing={editing}
                    modal={modal}
                  >
                    {text}
                  </ButtonSimulateurAdd>
                )
              )}
            </div>

            <div className={styles.individusContainer} id="situation">
              <ButtonSimulateurAdd delay={1.5} editing>
                {t("simu_foyer.step1.single")}
              </ButtonSimulateurAdd>
            </div>
            <div className={styles.individusContainer1} id="enfants">
              {buttonConfigs1.map(({ icon, text, primary, editing }, idx) => (
                <div key={`${text}-${idx}`} className={styles.cardWrapper}>
                  <ButtonSimulateurAdd
                    key={`${text}-${idx}`}
                    delay={idx * 0.5}
                    icon={icon}
                    primary={primary}
                    editing={editing}
                  >
                    {text}
                  </ButtonSimulateurAdd>
                </div>
              ))}
            </div>
          </FoyerStep>
        </div>
      </div>{" "}
      <div className={styles.synthese}>
        <Flex align="center" wrap gap={30}>
          <h2 style={{ fontSize: "30px", fontWeight: "900" }}>
            {t("SYNTHESE")}
          </h2>
          <Progress type="dashboard" percent={50} size="small" />
        </Flex>
        <h3> VOUS</h3>
      </div>
    </main>
  );
};

export default SimulateurView;
