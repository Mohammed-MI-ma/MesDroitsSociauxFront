/* eslint-disable no-undef */

const fonts = import.meta.glob("./assets/fonts/*.woff2", { eager: true });

// fontsConfig.js
export const FontsConfig = {
  //Foreign Fonts
  "Primary-Font": fonts["./assets/fonts/Cairo.woff2"].default,

  //ArabicFont
  "Primary-Font_ar": fonts["./assets/fonts/Cairo.woff2"].default,
};
