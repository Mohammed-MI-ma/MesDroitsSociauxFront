// routes.js
import React, { lazy } from "react";
import CustomSuspense from "./components/CoreComponents/CustomSuspense/CustomSuspense";
import SimulatorPage from "./pages/SimulatorPage/SimulatorPage";
import SimulatorFoyerPage from "./pages/SimulatorFoyerPage/SimulatorFoyerPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import PrivateRoute from "./components/CoreComponents/PrivateRoute/PrivateRoute";

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
  {
    path: "/maroc-connect/connexion",
    element: (
      <CustomSuspense id="signInPage">
        <SignInPage />
      </CustomSuspense>
    ),
  },
  {
    path: "/votre-simulateur/AidesSocialesDirectes",
    element: (
      <PrivateRoute>
        <CustomSuspense id="protectedPage">
          <div>Protected Content</div>
        </CustomSuspense>
      </PrivateRoute>
    ),
  },
];
export default routes;
