import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//__FRAMER_MOTION
import { AnimatePresence } from "framer-motion";

//__CONFIGURATION
import frFR from "antd/es/locale/fr_FR";
import { global_Assets } from "./config.dev.js";

//__ROUTES
import routes from "./routes";

import SEO from "./components/CoreComponents/SEO/SEO.jsx";
import ModalCookiesConsent from "./components/RefinedComponents/ModalCookiesConsent/ModalCookiesConsent.jsx";
import ParamsSiteComponent from "./components/CoreComponents/ParamsSiteComponent/ParamsSiteComponent.jsx";
import Loader from "./components/CoreComponents/CustomSuspense/Loader/index.jsx";
import HeaderLogoHome from "./components/RefinedComponents/AppHeader/AppHeader.jsx";
import CustomDrawer from "./components/CoreComponents/CustomDrawer/CustomDrawer.jsx";
import OfflineBanner from "./components/CoreComponents/OfflineBanner/OfflineBanner.jsx";
import Footer from "./components/CoreComponents/Footer/Footer.jsx";

//__CUSTOM_HOOKS
import { useOnlineStatus } from "./hooks/useOnlineStatus.js";

import { loadImages } from "./services/loadAssets.js";

//__STYLING
import style from "./App.module.css";

//hello
function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const isOnline = useOnlineStatus();
  const location = useLocation();

  const renderRoutes = (routesArray) =>
    routesArray.map(({ path, element, children }, index) => (
      <Route key={index} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ));
  useEffect(() => {
    async function fetchData() {
      try {
        // await loadFonts(FontsConfig);
        await loadImages(global_Assets);
        setAppIsReady(true);
      } catch (error) {
        console.error("Failed to load fonts:", error);
      }
    }

    fetchData();
  }, []);

  // Scroll to the top of the page whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [location]);

  if (!appIsReady) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      {!isOnline ? (
        <OfflineBanner />
      ) : (
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
                <CustomDrawer />
                <Routes location={location} key={location.pathname}>
                  {renderRoutes(routes)}
                </Routes>
              </Suspense>
            </AnimatePresence>
            <FloatButton.BackTop />
            <Footer />
          </div>
        </ConfigProvider>
      )}
    </React.Fragment>
  );
}

export default App;
