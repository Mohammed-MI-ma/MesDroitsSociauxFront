//__REACT
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

//__STYLES
import styles from "./SimulateurView2.module.css";

//__COMPONENTS
import FoyerStep from "../../Steps/FoyerStep/FoyerStep";
import ButtonSimulateurAdd from "../../../../components/CoreComponents/ButtonSimulateurAdd/ButtonSimulateurAdd";

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

const SimulateurView2 = () => {
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
            stepTitle={t("simu_foyer.step2.step2_title")}
            stepDescription={t("simu_foyer.step2.step2_desc")}
            key="Key"
            stepKey={1}
          >
            <div className={styles.situationPersonneContainer}>
              <div className={`${styles.situationPersonne} shadow`}>
                <div>Vous etes</div>
                <form></form>
              </div>{" "}
              <div className={`${styles.situationPersonne} shadow`}>
                <div>Vous etes</div>
              </div>{" "}
              <div className={`${styles.situationPersonne} shadow`}>
                <div>Vous etes</div>
              </div>{" "}
              <div className={`${styles.situationPersonne} shadow`}>
                <div>Vous etes</div>
              </div>{" "}
            </div>
          </FoyerStep>
        </div>
      </div>{" "}
      <Synthese />
    </main>
  );
};

export default SimulateurView2;
