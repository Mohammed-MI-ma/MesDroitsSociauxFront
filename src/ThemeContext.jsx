import React, { createContext, useState, useEffect } from "react";
import { FontsConfig } from "./fontsConfig";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [language] = useState(localStorage.getItem("lang") || "fr");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isRTL, setIsRTL] = useState(
    () => localStorage.getItem("dir") === "rtl"
  );

  // Effect to apply dark mode
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  // Effect to apply RTL/LTR direction and update font dynamically
  useEffect(() => {
    const isArabic = language === "ar";
    document.documentElement.lang = language;

    const direction = isArabic ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    setIsRTL(isArabic); // Sync with ThemeContext

    localStorage.setItem("lang", language);
    localStorage.setItem("dir", direction);

    // Dynamically apply the font
    const fontUrl = isArabic
      ? FontsConfig["Primary-Font_ar"]
      : FontsConfig["Primary-Font"];

    // Check if font is loaded and apply
    const fontFace = new FontFace("PrimaryFont", `url(${fontUrl})`);
    fontFace
      .load()
      .then(() => {
        document.fonts.add(fontFace); // Add font to the document fonts list
        document.documentElement.style.setProperty(
          "--primary-font",
          `"PrimaryFont", sans-serif`
        );
      })
      .catch((error) => {
        console.error("Failed to load font:", error);
      });
  }, [language, setIsRTL]);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, setIsDarkMode, isRTL, setIsRTL }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
