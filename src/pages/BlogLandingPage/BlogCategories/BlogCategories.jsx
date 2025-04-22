import React, { useEffect, useState } from "react";
import styles from "./BlogCategories.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getBlogCategories } from "../../../services/api";

const BlogCategories = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getBlogCategories();
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.warn("Categories response is not an array:", data);
        }
      } catch (error) {
        console.error("Failed to load blog categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className={styles.blogCategories}>
      <Button type="text" className={styles.stickyButton}>
        <Link to={"/"}>{t("quickActions.home")}</Link>
      </Button>

      <div className={styles.scrollableBar}>
        {categories.map((category) => (
          <Button key={category.id} type="link">
            <Link to={category.link}>
              {t(`categories.${category.name}`, {
                defaultValue: category.name,
              })}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default BlogCategories;
