// routes.js
import React, { lazy } from "react";
import CustomSuspense from "./components/CoreComponents/CustomSuspense/CustomSuspense";
import SimulatorPage from "./pages/SimulatorPage/SimulatorPage";
import SimulatorFoyerPage from "./pages/SimulatorFoyerPage/SimulatorFoyerPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import { useKeycloak } from "./components/KeycloakProvider";

const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const ProtectedRoute = ({ element }) => {
  const { authenticated, keycloak } = useKeycloak();

  if (!authenticated) {
    return (
      <div>
        You need to log in to access this page.
        <button onClick={() => keycloak.login()}>Login with Keycloak</button>
      </div>
    );
  }

  return element;
};
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
    // Example of protected route
    path: "/protected-page",
    element: (
      <ProtectedRoute
        element={
          <CustomSuspense id="protectedPage">
            <div>Protected Content</div>
          </CustomSuspense>
        }
      />
    ),
  },
];
export default routes;
