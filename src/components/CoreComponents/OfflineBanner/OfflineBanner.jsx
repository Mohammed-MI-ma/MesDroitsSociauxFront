import React from "react";

const OfflineBanner = () => (
  <div>
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />{" "}
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
  </div>
);

export default OfflineBanner;
