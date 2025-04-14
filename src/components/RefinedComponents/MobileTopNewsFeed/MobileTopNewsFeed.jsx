/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { openDrawer } from "../../../reducers/applicationService/drawerSlice";
import { motion } from "framer-motion";

import man from "./manHoldingIris.webp";
import arnaque from "./RSUArnque.webp";
import enquete from "./Enquete.webp";

//_STYLING
import style from "./MobileTopNewsFeed.module.css";

const MobileTopNewsFeed = ({ my_ref, id, inView }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  // Once inView is true, set the section as visible and keep it visible
  useEffect(() => {
    if (inView && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [inView, hasBeenVisible]);
  const handleOpen = useCallback(() => {
    dispatch(
      openDrawer({
        title: t("Breakingnews"),
        placement: "bottom",
        contentType: "news", // ✅ this matches switch case
      })
    );
  }, [dispatch, t]);

  const cardStyles = (index) => ({
    backgroundImage:
      index === 0
        ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${arnaque})`
        : index === 1
        ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${enquete})`
        : undefined,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  });

  return (
    <div ref={my_ref} id={id}>
      {hasBeenVisible && (
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
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={cardStyles(index)}
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
          <div className={style.mobile} style={{ height: "150px" }}>
            <motion.div
              style={{
                width: "50%",
                height: "100%",
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${man})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "flex-end",
                color: "white",
                fontSize: "16px",
                padding: "3px",
                backgroundRepeat: "no-repeat",
              }}
              whileTap={{ scale: 0.9 }}
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
                style={{ height: "80%", color: "black" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.4,
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    background: "#f1f1f1",
                    color: "var(--color-primary)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      gap: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    <MdSlowMotionVideo />
                    <h1 style={{ fontWeight: 900, margin: "0px" }}>
                      La page d'accueil
                    </h1>
                  </div>
                  <p style={{ fontSize: "10px" }}>
                    Pour voir cette vidéo, vous devez autoriser les cookies
                    "Vidéo"
                  </p>
                  <Button size="small" shape="round">
                    Gérer les cookies
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.4,
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                }}
                style={{
                  fontWeight: "900",
                  textAlign: "center",
                  color: "var(--color-primary)",
                  fontSize: "10px",
                  padding: "5px",
                }}
              >
                Voir la transcription textuelle du tuto vidéo "La page
                d'accueil"
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileTopNewsFeed;
