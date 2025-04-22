import React from "react";
import { motion } from "framer-motion";
import styles from "./EditorPicks.module.css";
import image from "./test.webp";
import { FaVideo } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const EditorPicks = () => {
  return (
    <motion.section
      className={`${styles.editorPicksSection} shadow-lg`}
      aria-labelledby="editor-pick-title"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <motion.h2
        id="editor-pick-title"
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Editor's Picks – Latest Highlights
      </motion.h2>

      <motion.article
        className={styles.featuredHighlightArticle}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <motion.div
          className={styles.featuredHighlight}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${image})`,
          }}
          role="img"
          aria-label="76ers set record with 15th consecutive win"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className={styles.highlightOverlay}>
            <div className={styles.metaData}>
              <Avatar
                style={{ backgroundColor: "var(--color-red)" }}
                icon={<FaVideo />}
                alt="Video icon"
              />
              <span>2 min read</span>
            </div>

            <motion.div
              className={styles.metaData}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 1,
                duration: 0.5,
              }}
            >
              <span>NATIONAL - SOCIETE</span>
            </motion.div>
          </div>

          <motion.h3
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 1.2,
              duration: 0.5,
            }}
          >
            76ers set record with 15th consecutive win
          </motion.h3>
        </motion.div>
      </motion.article>

      <motion.div
        className={styles.secondaryPicksGrid}
        initial="hidden"
        animate="visible"
      >
        {[1, 2].map((_, i) => (
          <motion.article
            key={i}
            className={`${styles.secondaryPick} m-2 shadow-lg`}
            aria-label="Article: NO, Facebook doesn't secretly listen via your phone"
            custom={i}
            variants={fadeUp}
          >
            <header>
              <p>2 min read • NATIONAL - TECH TRENDING</p>
            </header>
            <main>
              <h4>NO, Facebook doesn't secretly listen via your phone's mic</h4>
              <p className={styles.articleSummary}>
                Experts explain why this is just a myth.
              </p>
            </main>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default EditorPicks;
