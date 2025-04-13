import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import styles from "./MemberCard.module.css";

const MemberCard = ({ prenom, dateNaissance }) => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className={styles.memberCard}>
      <h3 className={styles.memberName}>{prenom}</h3>
      <p className={styles.memberBirthdate}>
        {t("memberCard.bornOn")} {dateNaissance} {/* Use translation key */}
      </p>
    </div>
  );
};

export default MemberCard;
