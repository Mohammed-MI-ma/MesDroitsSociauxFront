//__REACT
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

//__COMPONENTS
import FoyerStep from "../../Steps/FoyerStep/FoyerStep";
import ButtonSimulateurAdd from "../../../../components/CoreComponents/ButtonSimulateurAdd/ButtonSimulateurAdd";

import Others from "../Others/Others";

import {
  findByRangCode,
  findOthers,
} from "../../../../reducers/applicationService/applicationSlice";
import {
  chefMenageInfo,
  conjointInfo,
} from "../../../../components/CoreComponents/GenericInfo/genericInfoConfig";
import Synthese from "../../Synthese/Synthese";

//__STYLES
import styles from "./SimulateurView.module.css";

const SimulateurView = () => {
  const { t } = useTranslation();
  const chefMenageRef = useRef(null);
  const conjointRef = useRef(null);
  const childRefs = useRef({});

  // State selections from Redux store
  const memberList = useSelector((state) => state.application.memberList);
  const chefMenage = useSelector((state) => findByRangCode(state, "CF"));
  const conjoint = useSelector((state) => findByRangCode(state, "CJ"));
  const others = useSelector((state) => findOthers(state, ["CJ", "CF"]));
  const tempChildRef = useRef(null); // Temporary ref for adding a new child

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
    <section className={styles.simulateurView}>
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
                  <div style={{ fontSize: "1rem", fontWeight: "900" }}>
                    {(() => {
                      switch (conjoint?.youLive) {
                        case "seul":
                          return t("simu_foyer.step1.single");
                        case "enCouple":
                          return t("simu_foyer.step1.enCouple");
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
                  body: <Others ref={tempChildRef} generic={true} />,
                  validate: async () => {
                    const isValid = await tempChildRef.current?.validateForm();
                    console.log("Validation ", isValid);

                    if (!isValid?.status) {
                      console.log("Validation failed");
                      return isValid;
                    }

                    // Ensure that tempChildRef is set before calling resetForm()
                    if (tempChildRef.current) {
                      try {
                        console.log("TOPPPP");
                        tempChildRef.current?.resetForm();
                      } catch (err) {
                        console.error("Error while resetting form:", err);
                      }
                    } else {
                      console.warn("tempChildRef is not yet initialized.");
                    }

                    return isValid;
                  },
                }}
                delay={1.5}
              >
                {t("simu_foyer.step1.ajouter_enfant")}
              </ButtonSimulateurAdd>

              {/* 🔹 List of Children */}
              {otherMembers.map(({ id, icon, primary }, idx) => {
                // Initialize ref if it doesn't exist
                if (!childRefs.current[id]) {
                  childRefs.current[id] = React.createRef();
                }

                const memberData = others.find((c) => c.id === id);

                return (
                  <div key={id} className={styles.cardWrapper}>
                    <ButtonSimulateurAdd
                      key={id}
                      delay={idx * 0.5}
                      icon={icon}
                      primary={primary}
                      id={id}
                      editing
                      modal={{
                        id: `Child-${id}`,
                        title: t("simu_foyer.step1.modifier_enfant"),
                        body: (
                          <Others
                            ref={childRefs.current[id]} // ✅ Use created ref directly
                            member={others.find((c) => c.id === id)}
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
                        <div style={{ fontSize: "1rem", fontWeight: "900" }}>
                          {t("simu_foyer.step1.modifier_enfant")}
                        </div>
                        <div style={{ fontSize: "1rem" }}>
                          {memberData?.prenom}
                        </div>
                        <div style={{ fontSize: "1rem" }}>
                          {memberData?.dateNaissance}
                        </div>
                      </div>
                    </ButtonSimulateurAdd>
                  </div>
                );
              })}
            </div>
          </FoyerStep>
        </div>
      </div>
      <Synthese />
    </section>
  );
};

export default SimulateurView;
