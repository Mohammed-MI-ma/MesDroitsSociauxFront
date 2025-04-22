import React from "react";
import { motion } from "framer-motion";
import style from "./QuickActionMenu.module.css";
import QuickActionItem from "./QuickActionItem";
import { useQuickActions } from "./actions";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // delay per item
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const QuickActionMenu = () => {
  const quickActions = useQuickActions();
  return (
    <div className={style.quickActionMenu}>
      {quickActions.map((action, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <QuickActionItem
            icon={action.icon}
            badgeCount={action.badgeCount}
            ariaLabel={action.ariaLabel}
            className={style.iconStyle}
            linkTo={action.linkTo}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default React.memo(QuickActionMenu);
