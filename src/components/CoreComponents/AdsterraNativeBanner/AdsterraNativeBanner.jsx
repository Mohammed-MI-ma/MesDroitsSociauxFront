import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../../LanguageContext";

const AdsterraNativeBanner = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pl26390795.profitableratecpm.com/21b4b8d18dfed847dcd377d9f16245ab/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.getElementById("adsterra-native-banner")?.appendChild(script);
  }, [language]);

  return (
    <div id="adsterra-native-banner" style={{ width: "100%", height: "auto" }}>
      <div id="container-21b4b8d18dfed847dcd377d9f16245ab" />
    </div>
  );
};

export default AdsterraNativeBanner;
