import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal, message } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

//__STYLING
import styles from "./StepperFooter.module.css";
import { resetApp } from "../../../reducers/applicationService/applicationSlice";
import { useDispatch } from "react-redux";

const StepperFooter = ({ current, steps, prev, next, language }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLastStep = current === steps.length - 1;
  const isFirstStep = current === 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => {
    dispatch(resetApp());
    setIsModalOpen(false);
  };
  const handleCancel = () => setIsModalOpen(false);

  return (
    <footer className={`${styles.footer} shadow`}>
      {isLastStep && (
        <Button
          type="primary"
          onClick={() => message.success(t("processing_complete"))}
        >
          {t("done")}
        </Button>
      )}

      {!isFirstStep && (
        <Button
          type="primary"
          icon={language !== "ar" ? <IoIosArrowBack /> : <IoIosArrowForward />}
          style={{ backgroundColor: "var(--color-secondary)" }}
          className={styles.nextButton}
          onClick={prev}
        >
          {t("previous")}
        </Button>
      )}

      {!isLastStep && (
        <div className="flex flex-col items-center">
          <Button
            type="primary"
            onClick={next}
            icon={
              language === "ar" ? <IoIosArrowBack /> : <IoIosArrowForward />
            }
            style={{ backgroundColor: "var(--color-secondary)" }}
            className={styles.nextButton}
          >
            {t("next")}
          </Button>

          <Button
            type="link"
            onClick={showModal}
            icon={<FaTrash />}
            style={{ color: "var(--color-red)", fontWeight: 900 }}
            className={styles.nextButton}
          >
            {t("reset")}
          </Button>

          <Modal
            centered
            title={t("attention")}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            cancelText={t("cancel_keep_data")}
            okText={t("confirm_reset")}
          >
            <p>{t("reset_warning")}</p>
          </Modal>
        </div>
      )}
    </footer>
  );
};

export default StepperFooter;
