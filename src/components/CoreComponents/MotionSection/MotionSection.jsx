import React from "react";
import { motion } from "framer-motion";

// Reusable MotionSection component
const MotionSection = ({
  children,
  className = "",
  initial = { opacity: 0, scale: 0.8, y: 200 },
  animate = { opacity: 1, scale: 1, y: 0 },
  transition = {
    duration: 1,
    delay: 0.3,
    type: "spring",
    stiffness: 30,
    damping: 10,
  },
}) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
