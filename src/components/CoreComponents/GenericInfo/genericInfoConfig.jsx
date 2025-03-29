// genericInfoConfig.js
import { FaRegUser } from "react-icons/fa"; // or any other relevant import
import GenericInfo from "./GenericInfo"; // Assuming the GenericInfo component is in the same folder
import ChefMenage from "../../../pages/SimulatorFoyerPage/Blocs/ChefMenage/ChefMenage";
import Conjointe from "../../../pages/SimulatorFoyerPage/Blocs/Conjointe/Conjointe";
import InfoText from "../InfoText/InfoText";

export const chefMenageInfo = (chefMenage, t, chefMenageRef) => {
  return GenericInfo({
    icon: <FaRegUser />,
    text: chefMenage ? (
      <InfoText
        label={t("you")}
        value={chefMenage.prenom}
        dateOfBirth={chefMenage.dateNaissance}
      />
    ) : (
      t("you")
    ),
    modal: {
      id: "CHEF_MENAGE",
      title: t("personal_data"),
      body: <ChefMenage ref={chefMenageRef} />,
    },
    ref: chefMenageRef,
  });
};

// You can create other configurations like this
export const conjointInfo = (conjoint, t, conjointRef) => {
  return GenericInfo({
    icon: <IoIosWoman />,
    text: conjoint ? (
      <InfoText
        label={t("simu_foyer.step1.ajouter_conjointe")}
        value={conjoint.prenom}
        dateOfBirth={conjoint.dateNaissance}
      />
    ) : (
      t("simu_foyer.step1.ajouter_conjointe")
    ),
    modal: {
      id: "CONJOINT",
      title: t("simu_foyer.step1.situation_matrimoniale"),
      body: <Conjointe ref={conjointRef} />,
    },
    ref: conjointRef,
  });
};
