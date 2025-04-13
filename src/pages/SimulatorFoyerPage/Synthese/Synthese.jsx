import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import MemberCard from "../../../components/CoreComponents/ButtonSimulateurAdd/MemberCard/MemberCard";
import styles from "./Synthese.module.css";

const Synthese = () => {
  // Using useSelector to retrieve the memberList from the state
  const memberList = useSelector((state) => state.application.memberList);
  const currentStep = useSelector((state) => state.application.curentStep);

  // Use state to store filtered members
  const [filteredMemberList, setFilteredMemberList] = useState([]);

  // Translation hook
  const { t } = useTranslation();

  useEffect(() => {
    // Filter members based on specific condition and update the state
    const updatedMemberList = memberList.filter(
      (member) => !(member.rangCode === "CJ" && member.prenom === "skip2025")
    );

    // Update the state with the filtered list
    setFilteredMemberList(updatedMemberList);
  }, [memberList]); // Re-run the effect if memberList changes

  return (
    <motion.div
      className={styles.synthese}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 12,
      }}
    >
      {/* Use Flex component for layout */}
      <Flex align="center" wrap gap={30}>
        <h2 className={styles.syntheseTitle}>{t("SYNTHESE")}</h2>

        <Progress
          strokeColor="var(--color-secondary)"
          size="small"
          type="circle"
          percent={(currentStep / (6 - 1)) * 100}
          steps={{ count: 6, gap: 10 }}
          trailColor="rgba(210, 8, 8, 0.06)"
          strokeWidth={10}
        />
      </Flex>
      {/* Displaying household size with translation */}
      <h1 className={styles.memberCount}>
        {t("SIZE_OF_HOUSEHOLD")}: {filteredMemberList.length}
      </h1>
      {/* Render MemberCard for each member */}
      {filteredMemberList.map(({ id, prenom, dateNaissance }, idx) => (
        <MemberCard
          key={id || `${prenom}-${idx}`} // Use member ID or fallback to combination of prenom and index
          prenom={prenom}
          dateNaissance={dateNaissance}
        />
      ))}
    </motion.div>
  );
};

export default Synthese;
