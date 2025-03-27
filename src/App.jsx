import React, { Suspense, useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";

//__ANTD
import ConfigProvider from "antd/es/config-provider";

import "antd/es/config-provider/style"; // Only imports ConfigProvider styles
//__FRAMER_MOTION
import { AnimatePresence } from "framer-motion";

//__CONFIGURATION
import { FontsConfig } from "./fontsConfig.js";
import { loadFonts, loadImages } from "./services";

import frFR from "antd/es/locale/fr_FR";
import arEG from "antd/es/locale/ar_EG";

import { global_Assets } from "./config.dev.js";

//__ROUTES
import routes from "./routes";

import Loader from "./components/CoreComponents/CustomSuspense/Loader/index.jsx";
import HeaderLogoHome from "./components/RefinedComponents/AppHeader/AppHeader.jsx";

//__STYLING
import style from "./App.module.css";
import ModalCookiesConsent from "./components/RefinedComponents/ModalCookiesConsent/ModalCookiesConsent.jsx";
import ParamsSiteComponent from "./components/CoreComponents/ParamsSiteComponent/ParamsSiteComponent.jsx";
import SEO from "./components/CoreComponents/SEO/SEO.jsx";

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [language] = useState(localStorage.getItem("lang") || "fr");

  useEffect(() => {
    async function fetchData() {
      try {
        await loadFonts(FontsConfig);
        await loadImages(global_Assets);
        setAppIsReady(true);
      } catch (error) {
        console.error("Failed to load fonts:", error);
      }
    }

    fetchData();
  }, []);

  if (!appIsReady) {
    return <Loader />;
  }

  return (
    <>
      <ConfigProvider
        locale={frFR}
        theme={{
          token: {
            fontFamily: "var(--primary-font)",
            colorPrimary: "var(--color-primary)",
          },
        }}
      >
        <ModalCookiesConsent />
        <ParamsSiteComponent />
        <div className={`${style.wrapper}`}>
          <HeaderLogoHome />
          <AnimatePresence mode="wait">
            <Suspense fallback={<Loader />}>
              <SEO />
              <Routes>
                {routes.length > 0 ? (
                  routes.map((route, index) => <Route key={index} {...route} />)
                ) : (
                  <Route path="*" element={<div>No Routes Found</div>} />
                )}
              </Routes>
            </Suspense>
          </AnimatePresence>
          <footer
            className="w-full flex items-center justify-center text-center h-[300px]"
            style={{ background: "var(--color-primary)" }}
          >
            <div>HEllsss</div>
          </footer>
        </div>
      </ConfigProvider>
    </>
  );
}

export default App;
