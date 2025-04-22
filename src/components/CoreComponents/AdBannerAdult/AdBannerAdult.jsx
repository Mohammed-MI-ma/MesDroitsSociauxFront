import React, { useEffect } from "react";

const AdBannerAdult = () => {
  useEffect(() => {
    // Dynamically create the script element for the ad
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//www.highperformanceformat.com/4ac78451ebffa35a535e3547d07186b5/invoke.js";

    // Define the ad options
    const atOptions = {
      key: "4ac78451ebffa35a535e3547d07186b5",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };
    window.atOptions = atOptions;

    // Find the target div by id
    const adContainer = document.getElementById("adContainerAdult");

    // Append the script and initialize ad once the div is available
    if (adContainer) {
      adContainer.appendChild(script);
    }

    // Cleanup the script when the component is unmounted
    return () => {
      if (adContainer) {
        adContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id="adContainerAdult"
      style={{
        textAlign: "center",
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* The ad will be injected here */}
    </div>
  );
};

export default AdBannerAdult;
