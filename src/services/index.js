export const loadFonts = async (fontsConfig) => {
  try {
    const fontFaces = Object.entries(fontsConfig).map(([fontName, url]) => {
      return new FontFace(fontName, `url(${url})`, {
        style: "normal",
        weight: "400",
      });
    });

    await Promise.all(
      fontFaces.map((fontFace) =>
        fontFace.load().then((loadedFace) => document.fonts.add(loadedFace))
      )
    );

    console.log("Fonts loaded successfully!");
  } catch (error) {
    console.error("Error loading fonts:", error);
  }
};

export const loadImages = async (imagesConfig) => {
  try {
    const promises = Object.values(imagesConfig).map((imagePath) => {
      if (!imagePath) {
        console.error("Image path is undefined!");
        return Promise.reject("Invalid image path");
      }

      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imagePath;
        img.onload = resolve;
        img.onerror = () => {
          console.error("Failed to load image:", imagePath);
          reject(`Failed to load ${imagePath}`);
        };
      });
    });

    await Promise.all(promises);
    console.log("Images loaded successfully!");
  } catch (error) {
    console.error("Some images failed to load.", error);
  }
};
