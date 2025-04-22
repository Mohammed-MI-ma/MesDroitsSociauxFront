import React, { useEffect, useState } from "react";
import styles from "./PopularTags.module.css";
import { getPopularTags } from "../../../services/api";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PopularTags = () => {
  const { t } = useTranslation();
  const [popularTags, setPopularTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularTags = async () => {
      try {
        const data = await getPopularTags();
        if (Array.isArray(data)) {
          setPopularTags(data);
        } else {
          console.warn("PopularTags response is not an array:", data);
        }
      } catch (error) {
        console.error("Failed to load PopularTags:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularTags();
  }, []);

  return (
    <footer className={styles.popularTags}>
      <h1>{t("Popular Tags")}</h1>

      {loading ? (
        <p className={styles.loader}>{t("Loading popular tags...")}</p>
      ) : popularTags.length === 0 ? (
        <p className={styles.empty}>
          {t("The popular tags array is currently empty.")}
        </p>
      ) : (
        <div className={styles.tagsWrapper}>
          <AnimatePresence>
            {popularTags.map((popularTag, index) => (
              <motion.div
                key={popularTag.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button type="text">
                  <Link to={popularTag.link}>{popularTag.name}</Link>
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </footer>
  );
};

export default PopularTags;
