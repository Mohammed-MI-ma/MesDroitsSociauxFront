import React, { useMemo } from "react";
import styles from "./SimulateurView.module.css";
import { useTranslation } from "react-i18next";
import FoyerStep from "../../Steps/FoyerStep/FoyerStep";
import ButtonSimulateurAdd from "../../../../components/CoreComponents/ButtonSimulateurAdd/ButtonSimulateurAdd";
//"../../assets/images/bgBlocTop.png";
const SimulateurView = () => {
  const { t } = useTranslation();

  const options = [
    { label: t("male"), value: "Apple" },
    { label: t("female"), value: "Pear" },
  ];
  // Memoize the icons to avoid recalculating on every render
  const buttonConfigs = useMemo(
    () => [
      {
        icon: <FaRegUser />,
        text: t("you"),
        primary: true,
        editing: true,
        modal: {
          title: t("personal_data"),
          body: (
            <>
              <form className="">
                <div>
                  {t("first_name")}
                  <Input></Input>
                </div>
                <div>
                  <p> {t("date_of_birth")}</p>

                  <DatePicker
                    onChange={() => {}}
                    style={{ width: "100%" }}
                    placeholder={t("choose_dob")}
                  />
                </div>
                <div>
                  {t("gender")}
                  <Radio.Group
                    block
                    options={options}
                    defaultValue="Apple"
                    optionType="button"
                    buttonStyle="solid"
                  />
                </div>
              </form>
            </>
          ),
        },
      },
      {
        icon: <IoIosWoman />,
        text: t("simu_foyer.step1.ajouter_conjointe"),
        primary: false,
        editing: false,
      },
    ],
    [t]
  );
  const buttonConfigs1 = useMemo(
    () => [
      {
        icon: <IoIosWoman />,
        text: t("simu_foyer.step1.ajouter_conjointe"),
        primary: false,
        editing: false,
      },
      {
        icon: <IoIosWoman />,
        text: t("simu_foyer.step1.ajouter_conjointe"),
        primary: false,
        editing: false,
      },
      {
        icon: <IoIosWoman />,
        text: t("simu_foyer.step1.ajouter_conjointe"),
        primary: false,
        editing: false,
      },
      {
        icon: <IoIosWoman />,
        text: t("simu_foyer.step1.ajouter_conjointe"),
        primary: false,
        editing: false,
      },
    ],
    [t]
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
                {t("simu_foyer.step1.single")}
              </ButtonSimulateurAdd>
            </div>
            <div className={styles.individusContainer1} id="enfants">
              {buttonConfigs1.map(({ icon, text, primary, editing }, idx) => (
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
          <h2 style={{ fontSize: "30px", fontWeight: "900" }}>SYNTHÈSE</h2>
          <Progress type="dashboard" percent={50} size="small" />
        </Flex>
        <h3> VOUS</h3>
      </div>
    </main>
  );
};

export default SimulateurView;
