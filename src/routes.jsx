import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import CustomSuspense from "./components/CoreComponents/CustomSuspense/CustomSuspense";
import LanguageLayout from "./components/CoreComponents/LanguageLayout/LanguageLayout";
import PreparezVosInfosPage from "./pages/PreparezVosInfosPage/PreparezVosInfosPage";

const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const SimulatorPage = lazy(() => import("./pages/SimulatorPage/SimulatorPage"));
const SimulatorFoyerPage = lazy(() =>
  import("./pages/SimulatorFoyerPage/SimulatorFoyerPage")
);
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));

// Get language from localStorage or default to 'fr'
const getDefaultLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("lang") || "fr";
  }
  return "fr"; // fallback if window not defined (e.g., SSR)
};

const routes = [
  {
    path: "/",
    element: <Navigate to={`/${getDefaultLanguage()}`} replace />, // ✅ Redirect from / to /fr or /ar
  },
  {
    path: "/:lang",
    element: <LanguageLayout />,
    children: [
      {
        path: "", // /:lang
        element: (
          <CustomSuspense id="landingPage">
            <LandingPage />
          </CustomSuspense>
        ),
      },
      {
        path: "votre-simulateur/accueil",
        element: (
          <CustomSuspense id="simulatorPage">
            <SimulatorPage />
          </CustomSuspense>
        ),
      },
      {
        path: "votre-simulateur/accueil/Preparez_vos_infos",
        element: (
          <CustomSuspense id="Preparez_vos_infos">
            <PreparezVosInfosPage />
          </CustomSuspense>
        ),
      },
      {
        path: "votre-simulateur/simu-foyer",
        element: (
          <CustomSuspense id="simulatorFoyer">
            <SimulatorFoyerPage />
          </CustomSuspense>
        ),
      },
      {
        path: "maroc-connect/connexion",
        element: (
          <CustomSuspense id="signInPage">
            <SignInPage />
          </CustomSuspense>
        ),
      },
    ],
  },
];

export default routes;
