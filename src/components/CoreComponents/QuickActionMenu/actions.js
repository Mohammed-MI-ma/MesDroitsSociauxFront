import { useTranslation } from "react-i18next";
import { useContext } from "react";
import LanguageContext from "../../../LanguageContext";

export const useQuickActions = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return [
    {
      icon: FaHome,
      ariaLabel: t("quickActions.home"),
      linkTo: `/${language}/`,
    },
    {
      icon: TiNews,
      ariaLabel: t("quickActions.news"),
      linkTo: `/${language}/blog/News`,
    },
    {
      icon: PiBellSimpleRingingFill,
      ariaLabel: t("quickActions.notifications"),
      badgeCount: 10,
      linkTo: null,
    },
    {
      icon: AiFillCalculator,
      ariaLabel: t("quickActions.calculator"),
      linkTo: `/${language}/votre-simulateur/simu-foyer`,
    },
  ];
};
