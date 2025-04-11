import React from "react";
import { useTranslation } from "react-i18next";
import style from "./PreparezVosInfo.module.css";
import papers from "/assets/images/svg/papers.svg";
import HeroSection from "../../components/CoreComponents/HeroSection/HeroSection";

const DocumentList = () => {
  const { t } = useTranslation();

  const documents = [
    { label: t("seo.RnpRequired"), desc: t("seo.Adresse_RNP") },
    { label: t("seo.PaySlips"), desc: t("seo.PaySlipsDescription") },
    { label: t("seo.LeaseContract"), desc: t("seo.LeaseContractDescription") },
    { label: t("seo.AidAmounts"), desc: t("seo.AidAmountsDescription") },
    {
      label: t("seo.PropertyTaxNotice"),
      desc: t("seo.PropertyTaxNoticeDescription"),
    },
  ];

  return (
    <ul className={style.prepare_info__section_body}>
      {documents.map((doc, index) => (
        <li key={index} style={{ marginBottom: "var(--gap-xl)" }}>
          <FaPaperclip />
          <span style={{ fontWeight: "900" }}>
            {doc.desc ? <strong>{doc.label}: </strong> : doc.label}
          </span>
          {doc.desc}
        </li>
      ))}
    </ul>
  );
};

const PreparezVosInfosPage = () => {
  const { t } = useTranslation();

  return (
    <main className={style.prepare_info__container}>
      <HeroSection illustration={papers} without>
        <h1 className={style.prepare_info__title}>
          {t("simulation.preparezVosInfos")}
        </h1>
        <p>{t("Simplify_your_life_info")}</p>
      </HeroSection>

      <section style={{ margin: "var(--gap-xl)" }}>
        <h2 className={style.prepare_info__section_title}>
          {t("seo.PreparezVosInfosDocumentsTitle")}
        </h2>
        <DocumentList />
      </section>
    </main>
  );
};

export default PreparezVosInfosPage;
