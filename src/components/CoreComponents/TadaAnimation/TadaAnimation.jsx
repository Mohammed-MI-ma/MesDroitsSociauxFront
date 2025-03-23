/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const TadaAnimation = ({ children }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1.1, 1.1, 1], // Scale effect
        rotate: [0, -3, 3, -3, 0], // Rotate effect (wiggle)
      }}
      transition={{
        duration: 1, // Speed of the animation
        times: [0, 0.1, 0.2, 0.3, 1], // Timing control
        ease: "easeInOut", // Easing to make it smooth
        repeat: Infinity, // Infinite loop
        repeatType: "loop", // Loop animation
        repeatDelay: 0.5, // Add delay after each wiggle cycle
      }}
      style={{
        display: "inline-block",
        textAlign: "center",
        fontSize: "2rem",
        cursor: "pointer",
      }}
    >
      {children}
    </motion.div>
  );
};

export default TadaAnimation;
