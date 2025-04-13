//__REACT
import React, { useEffect, useMemo, useRef, useState } from "react";
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
import Synthese from "../../Synthese/Synthese";

const SimulateurView = () => {
  // Translation hook
  const { t } = useTranslation();

  // Refs for managing form or component states
  const chefMenageRef = useRef(null);
  const conjointRef = useRef(null);
  const childRefs = useRef({});

  // State selections from Redux store
  const memberList = useSelector((state) => state.application.memberList);
  const chefMenage = useSelector((state) => findByRangCode(state, "CF"));
  const conjoint = useSelector((state) => findByRangCode(state, "CJ"));
  const others = useSelector((state) => findOthers(state, ["CJ", "CF"]));
  const [memberList_Rect, setMemberList_Rect] = useState([]);

  useEffect(() => {
    const filteredMemberList = memberList
      .filter(
        (member) => !(member.rangCode === "CJ" && member.prenom === "skip2025")
      )
      .map((e) => {
        // Your mapping logic here (if any)

        return e;
      });
    setMemberList_Rect(filteredMemberList); // Set the new filtered and mapped list
  }, [memberList]); // This effect runs whenever memberList changes
  // Info configuration based on the selected data
  const chefMenageInfoData = chefMenageInfo(chefMenage, t, chefMenageRef);
  const conjointInfoData = conjointInfo(conjoint, t, conjointRef);

  //__Family
  const parents = useMemo(
    () => [chefMenageInfoData, conjointInfoData],
    [chefMenageInfoData, conjointInfoData]
  );
  const otherMembers = useMemo(
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
            stepKey={1}
          >
            <div className={styles.individusContainer} id="parents">
              {parents.map(({ icon, text, primary, editing, modal }, idx) => (
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
              ))}
            </div>

            <div className={styles.individusContainer} id="situation">
              <ButtonSimulateurAdd delay={1.5} editing muted>
                {conjoint ? (
                  <div style={{ fontSize: "30px" }}>
                    {(() => {
                      switch (conjoint?.youLive) {
                        case "seul":
                          return t("simu_foyer.step1.single");
                        case "enCouple":
                          return "couple marié";
                        case "divorce":
                          return t("simu_foyer.step1.divorced");
                        case "veuf":
                          return t("simu_foyer.step1.veuf");
                        default:
                          return "";
                      }
                    })()}
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
              {otherMembers.map(({ id, icon, primary }, idx) => {
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
      </div>
      <Synthese />
    </main>
  );
};

export default SimulateurView;
