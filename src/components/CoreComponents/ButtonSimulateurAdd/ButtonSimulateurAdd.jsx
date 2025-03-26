/* eslint-disable no-unused-vars */
import React, { useMemo } from "react";
import clsx from "clsx"; // For conditional class handling
import PropTypes from "prop-types";
import { Button, Avatar } from "antd"; // Assuming Button and Avatar are imported from antd
import { motion } from "framer-motion"; // Importing motion from Framer Motion

import styles from "./ButtonSimulateurAdd.module.css";

const ButtonSimulateurAdd = ({ children, icon, primary, editing, delay }) => {
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
      transition={{ duration: 1.25, delay: 1 + 0.2 * delay }} // Smooth fade-in effect
      className={styles.ButtonSimulateurAdd}
    >
      <Button icon={icon} className={buttonClass}>
        <Avatar
          size="large"
          icon={renderedIcon}
          style={{
            background: "var(--color-secondary)",
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(6px, -6px)",
          }}
        />{" "}
        {children}
      </Button>
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
