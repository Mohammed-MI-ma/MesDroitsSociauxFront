/* eslint-disable no-unused-vars */
import React from "react";
import style from "./MobileTopNewsFeed.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { openDrawer } from "../../../reducers/applicationService/drawerSlice";
import { motion } from "framer-motion";
import man from "./manHoldingIris.webp";
import arnaque from "./RSUArnque.webp";
import enquete from "./Enquete.webp";
const MobileTopNewsFeed = () => {
  let { t } = useTranslation();
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(
      dispatch(
        openDrawer({
          title: t("Breakingnews"),
          placement: "bottom",
          contentType: "news", // ✅ this matches switch case
        })
      )
    );
  };

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>{t("Breakingnews")}</h1>

        <div className={`${style.scrollWrapper} hide-scrollbar`}>
          <div className={style.cardList}>
            {Array.from({ length: 10 }).map((_, index) => (
              <motion.div
                key={index}
                className={style.card}
                onClick={handleOpen}
                whileTap={{ scale: 0.9 }} // Bounce effect on tap
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                style={{
                  backgroundImage:
                    (index == 0 &&
                      `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${arnaque})`) ||
                    (index == 1 &&
                      `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${enquete})`),
                  backgroundPosition: "center", // Center the image for better visibility
                  backgroundSize: "cover", // Ensure the image covers the div fully
                  backgroundRepeat: "no-repeat", // Prevent the image from repeating
                }}
              >
                <h1 className={style.cardTitle}>
                  Giant Cactus Discovered in Sahara Becomes New Tourist
                  Attraction in Morocco
                </h1>
                <p className={style.cardDate}>
                  Zagora, Morocco – April 7, 2025
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Section */}
      <div
        className={style.mobile}
        style={{
          height: "150px",
          background: "var(--color-primary)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          style={{
            width: "50%",
            height: "100%",
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${man})`,
            backgroundPosition: "center", // Center the image for better visibility
            backgroundSize: "cover", // Ensure the image covers the div fully
            display: "flex",
            alignItems: "flex-end", // Align content at the bottom
            color: "white",
            fontSize: "16px",
            padding: "3px",
            backgroundRepeat: "no-repeat", // Prevent the image from repeating
          }}
          whileTap={{ scale: 0.9 }} // Add scale effect on tap
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.2,
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
        >
          {t("workMessage")}
        </motion.div>
        <div style={{ flex: 1 }}>
          <motion.div
            style={{
              height: "50%",
              background: "var(--color-secondary)",
              color: "white",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.4,
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
            whileTap={{ scale: 0.9 }}
          >
            aaaaaa
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.6,
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
          >
            bbbbbb
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MobileTopNewsFeed;
