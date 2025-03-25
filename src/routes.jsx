// routes.js
import React, { lazy } from "react";
import CustomSuspense from "./components/CoreComponents/CustomSuspense/CustomSuspense";
import SimulatorPage from "./pages/SimulatorPage/SimulatorPage";
import SimulatorFoyerPage from "./pages/SimulatorFoyerPage/SimulatorFoyerPage";

const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));

const routes = [
  {
    path: "/",
    element: (
      <CustomSuspense id="landingPage">
        <LandingPage />
      </CustomSuspense>
    ),
  },
  {
    path: "/votre-simulateur/accueil",
    element: (
      <CustomSuspense id="simulatorPage">
        <SimulatorPage />
      </CustomSuspense>
    ),
  },
  {
    path: "/votre-simulateur/simu-foyer",
    element: (
      <CustomSuspense id="simulatorPage">
        <SimulatorFoyerPage />
      </CustomSuspense>
    ),
  },
];
export default routes;
