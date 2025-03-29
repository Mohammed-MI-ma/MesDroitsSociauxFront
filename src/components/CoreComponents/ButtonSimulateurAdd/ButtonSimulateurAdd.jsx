/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import clsx from "clsx"; // For conditional class handling
import PropTypes from "prop-types";
import { Button, Avatar } from "antd"; // Assuming Button and Avatar are imported from antd
import { motion } from "framer-motion"; // Importing motion from Framer Motion
import { useDispatch, useSelector } from "react-redux";

import styles from "./ButtonSimulateurAdd.module.css";
import { useTranslation } from "react-i18next";
import { addToMemberList } from "../../../reducers/applicationService/applicationSlice";

const ButtonSimulateurAdd = ({
  children,
  icon,
  primary,
  editing,
  delay,
  modal,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    const res = await modal.validate();
    if (!res.status) {
      console.log("Prevent closing if validation fails");
      setIsModalOpen(true);
      return;
    }
    console.log("red", res);
    dispatch(addToMemberList({ ...res.body, rangCode: res.rangCode }));

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // Memoize the icon rendering to avoid unnecessary recalculations
  const renderedIcon = useMemo(() => {
    return editing ? <MdModeEdit /> : <IoIosAdd />;
  }, [editing]);

  // Memoize the className to avoid recalculating unless necessary
  const buttonClass = useMemo(() => {
    return clsx({ [styles.nonPrimary]: !primary });
  }, [primary]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25, delay: 0.5 + 0.2 * delay }} // Smooth fade-in effect
      className={styles.ButtonSimulateurAdd}
    >
      <Button icon={icon} className={buttonClass} onClick={showModal}>
        <Avatar
          size="large"
          icon={renderedIcon}
          style={{
            background: "#cb4b4b",
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(6px, -6px)",
          }}
        />{" "}
        {children}
      </Button>
      <ConfigProvider
        theme={{
          token: {
            color: "#1677ff",
          },
        }}
      >
        <Modal
          okText={t("validate")}
          cancelText={t("cancel")}
          title={modal?.title}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
        >
          {modal?.body}
        </Modal>
      </ConfigProvider>
    </motion.div>
  );
};

// ✅ PropTypes for validation
ButtonSimulateurAdd.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  primary: PropTypes.bool,
  editing: PropTypes.bool, // added `editing` prop for validation
};

// ✅ Default Props
ButtonSimulateurAdd.defaultProps = {
  primary: false,
  editing: false, // default value for `editing` prop
};

export default ButtonSimulateurAdd;
