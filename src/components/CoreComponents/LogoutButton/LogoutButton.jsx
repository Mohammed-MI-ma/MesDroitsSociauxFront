import React from "react";
import { useTranslation } from "react-i18next";

//__ANTD
import "antd/es/avatar/style";

//__ICONS
import { RiLoginCircleFill } from "react-icons/ri";

//__STYLE
import style from "./LogoutButton.module.css";

const LogoutButton = () => {
  const { t } = useTranslation();

  const handleLogout = async () => {
    // Call the backend logout route
    try {
      // Make a request to your logout endpoint (e.g., /api/logout)
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
        {
          method: "GET",
          credentials: "include", // Include cookies for session management
        }
      );
      if (response.ok) {
        const { logoutUrl } = await response.json();
        console.log("Redirecting to:", logoutUrl); // Log the URL to verify it's correct

        window.location.href = logoutUrl; // Perform the redirect on the client
      } else {
        console.error("Logout failed");
      }
      // After logout, redirect the user to the homepage or login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <Button
        className={style.logoutButton}
        type="primary"
        onClick={handleLogout}
      >
        <TbLogout2 style={{ color: "white" }} />
        <div>
          <p>{t("Sedeconnecter")}</p>
        </div>
      </Button>{" "}
    </>
  );
};

export default LogoutButton;
