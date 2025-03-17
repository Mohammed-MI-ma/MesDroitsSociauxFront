import React from "react";
import { global_Assets } from "../../../config.dev.js";

import style from "./responsiveLogo.module.css";
const ResponsiveLogo = () => {
  // Ensure global_Assets exists and has the correct structure
  if (!global_Assets || !global_Assets[0]) return null;

  const { webp } = global_Assets[0];
  return (
    <img
      src={webp.medium} // Default fallback image
      srcSet={`${webp.small}, ${webp.medium} 2x, ${webp.large} 3x`}
      className={style.image}
      alt="MDS Logo"
    />
  );
};

export default ResponsiveLogo;
