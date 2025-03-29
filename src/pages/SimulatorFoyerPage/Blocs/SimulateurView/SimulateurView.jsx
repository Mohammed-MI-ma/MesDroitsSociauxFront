//__REACT
import React, { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

//__STYLES
import styles from "./SimulateurView.module.css";

//__COMPONENTS
import FoyerStep from "../../Steps/FoyerStep/FoyerStep";
import ButtonSimulateurAdd from "../../../../components/CoreComponents/ButtonSimulateurAdd/ButtonSimulateurAdd";

import ChefMenage from "../ChefMenage/ChefMenage";
import Conjointe from "../Conjointe/Conjointe";
import Others from "../Others/Others";

import {
  findByRangCode,
  findOthers,
} from "../../../../reducers/applicationService/applicationSlice";
import GenericInfo from "../../../../components/CoreComponents/GenericInfo/GenericInfo";
import {
  chefMenageInfo,
  conjointInfo,
} from "../../../../components/CoreComponents/GenericInfo/genericInfoConfig";

const SimulateurView = () => {
  const { t } = useTranslation();

  const chefMenageRef = useRef(null);
  const conjointRef = useRef(null);
  const childRefs = useRef({});

  const memberList = useSelector((state) => state.application.memberList);
  const chefMenage = useSelector((state) => findByRangCode(state, "CF"));
  const conjoint = useSelector((state) => findByRangCode(state, "CJ"));
  const others = useSelector((state) => findOthers(state, ["CJ", "CF"]));

  const chefMenageInfoData = chefMenageInfo(chefMenage, t, chefMenageRef);
  const conjointInfoData = conjointInfo(conjoint, t, conjointRef);
  const buttonConfigs = useMemo(
    () => [chefMenageInfoData, conjointInfoData],
    [chefMenageInfoData, conjointInfoData]
  );

  // 🔹 Memoize children list from Redux
  const children = useMemo(
    () =>
      others.map((child) => ({
        id: child.id, // ✅ Use `rangCode` as the identifier
        icon: <LuBaby />,
        text: child.prenom || t("simu_foyer.step1.ajouter_enfant"),
        primary: false,
        editing: true,
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
                    // If validation succeeds, reset the form
                    chefMenageRef.current?.resetForm();
                    return isValid;
                  },
                }}
              >
                {t("simu_foyer.step1.ajouter_enfant")}
              </ButtonSimulateurAdd>

              {/* 🔹 List of Children */}
              {children.map(({ id, icon, primary }, idx) => {
                if (!childRefs.current[id])
                  childRefs.current[id] = React.createRef();
                return (
                  <div key={id} className={styles.cardWrapper}>
                    <ButtonSimulateurAdd
                      key={id}
                      delay={idx * 0.5}
                      icon={icon}
                      primary={primary}
                      editing
                      modal={{
                        id: `Child-${id}`,
                        title: t("simu_foyer.step1.modifier_enfant"),
                        body: (
                          <Others
                            ref={(el) => {
                              if (el) childRefs.current[id] = el; // Assign ref dynamically
                            }}
                            member={others.find((c) => c.id === id)} // Use `id` instead of `rangCode`
                          />
                        ),
                        validate: async () => {
                          const isValid = await childRefs.current[
                            id
                          ]?.current?.validateForm();
                          console.log("Validation ", isValid);
                          return isValid?.status ? isValid : false;
                        },
                      }}
                    >
                      <div className="text-left">
                        <div style={{ fontSize: "12px", fontWeight: "100" }}>
                          {t("simu_foyer.step1.modifier_enfant")}
                        </div>
                        <div style={{ fontSize: "30px" }}>
                          {others.find((c) => c.id === id).prenom}
                        </div>
                        <div style={{ fontSize: "12px" }}>
                          {others.find((c) => c.id === id).dateNaissance}
                        </div>
                      </div>{" "}
                    </ButtonSimulateurAdd>
                  </div>
                );
              })}
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
