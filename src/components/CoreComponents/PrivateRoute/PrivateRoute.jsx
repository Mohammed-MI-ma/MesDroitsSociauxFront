import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../../AuthProvider";

const PrivateRoute = ({
  children,
  fallbackUrl = "/maroc-connect/connexion",
}) => {
  const { isAuthenticated, loading } = useAuth();

  // Handle loading state
  if (loading) {
    return <div>Checking authentication...</div>;
  }

  // Handle the authenticated state
  if (!isAuthenticated) {
    return <Navigate to={fallbackUrl} />;
  }

  // Render children if authenticated
  return children;
};

// PropTypes validation (optional for maintainability)
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  fallbackUrl: PropTypes.string,
};

export default PrivateRoute;
