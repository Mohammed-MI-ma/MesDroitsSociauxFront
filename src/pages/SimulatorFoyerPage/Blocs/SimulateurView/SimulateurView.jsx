import React, { useMemo, useRef } from "react";
import styles from "./SimulateurView.module.css";
import { useTranslation } from "react-i18next";
import FoyerStep from "../../Steps/FoyerStep/FoyerStep";
import ButtonSimulateurAdd from "../../../../components/CoreComponents/ButtonSimulateurAdd/ButtonSimulateurAdd";
import ChefMenage from "../ChefMenage/ChefMenage";
import Conjointe from "../Conjointe/Conjointe";

import { useSelector } from "react-redux";
import {
  findByRangCode,
  findOthers,
} from "../../../../reducers/applicationService/applicationSlice";
import Others from "../Others/Others";
//"../../assets/images/bgBlocTop.png";
const SimulateurView = () => {
  const { t } = useTranslation();
  const chefMenageRef = useRef(null);
  const conjointRef = useRef(null);
  const memberList = useSelector((state) => state.application.memberList);

  const rangCodeToFindCF = "CF";
  const rangCodeToFindCJ = "CJ";
  const chefMenage = useSelector((state) =>
    findByRangCode(state, rangCodeToFindCF)
  );
  const conjoint = useSelector((state) =>
    findByRangCode(state, rangCodeToFindCJ)
  );
  const others = useSelector((state) =>
    findOthers(state, [rangCodeToFindCJ, rangCodeToFindCF])
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
            <div style={{ fontSize: "18px" }}>{chefMenage.prenom} </div>
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
        text: conjoint ? (
          <div className="text-left">
            <div style={{ fontSize: "12px", fontWeight: "100" }}>
              {t("simu_foyer.step1.ajouter_conjointe")}
            </div>
            <div style={{ fontSize: "30px" }}>{conjoint.prenom} </div>
            <div style={{ fontSize: "12px" }}>{conjoint.dateNaissance} </div>
          </div>
        ) : (
          t("simu_foyer.step1.ajouter_conjointe")
        ),
        primary: false,
        editing: false,
        modal: {
          id: "CONJOINTE",
          title: "Votre situation matrimoniale",
          body: <Conjointe ref={conjointRef} />,
          validate: async () => {
            const isValid = await conjointRef.current?.validateForm(); // Ensure it's a boolean value
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
    [chefMenage, conjoint, t]
  );

  const children = useMemo(
    () =>
      others.map(({ prenom, text, dateNaissance }, idx) => ({
        icon: <LuBaby />,
        text: t("simu_foyer.step1.ajouter_enfant"),
        primary: false,
        editing: false,
      })),
    [others, t]
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
                {conjoint ? (
                  <div className="text-left">
                    <div style={{ fontSize: "30px" }}>
                      {conjoint.youLive === "enCouple" ? "couple marié" : ""}
                    </div>
                  </div>
                ) : (
                  t("simu_foyer.step1.single")
                )}
              </ButtonSimulateurAdd>
            </div>
            <div className={styles.individusContainer1} id="enfants">
              <ButtonSimulateurAdd
                key={`ChildChildChildChild`}
                icon={<LuBaby />}
                editing
                modal={{
                  id: "Child",
                  title: t("simu_foyer.step1.ajouter_enfant"),
                  body: <Others ref={chefMenageRef} />,
                  validate: async () => {
                    const isValid = await chefMenageRef.current?.validateForm(); // Ensure it's a boolean value
                    console.log("Validation ", isValid);
                    if (!isValid.status) {
                      console.log("Validation failed");
                      return isValid;
                    }
                    return isValid;
                  },
                }}
              >
                {t("simu_foyer.step1.ajouter_enfant")}
              </ButtonSimulateurAdd>

              {children.map(({ icon, text, primary, editing }, idx) => (
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
        <h1 style={{ fontSize: "16px" }}>
          Taille du ménagé: {memberList.length}
        </h1>
        {memberList.map(({ prenom, text, dateNaissance }, idx) => (
          <div
            key={`${text}-${idx}`}
            style={{
              borderLeft: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "900",
                textTransform: "uppercase",
              }}
            >
              {prenom}
            </h3>
            <p>Né le {dateNaissance}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SimulateurView;
