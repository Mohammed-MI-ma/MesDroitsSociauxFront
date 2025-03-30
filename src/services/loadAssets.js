export const loadImages = async (images) => {
  try {
    await Promise.all(
      Object.values(images).map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = () => {
            console.error(`Failed to load image: ${img.src}`);
            reject();
          };
          img.src = typeof image === "string" ? image : image?.uri;
        });
      })
    );
    console.log("All images loaded successfully.");
  } catch (error) {
    console.error("Some images failed to load." + error);
  }
};
