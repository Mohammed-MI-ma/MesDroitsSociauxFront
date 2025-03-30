import React from "react";

const OfflineBanner = () => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "#ffcc00",
      color: "#333",
      textAlign: "center",
      padding: "10px",
      fontSize: "14px",
    }}
  >
    ⚠️ You are offline. Some features may not work.
  </div>
);

export default OfflineBanner;
