import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // the actual user object
  const [loading, setLoading] = useState(true); // to show loading screen if needed

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        setUser(user); // set user object or null
      } catch (error) {
        console.error("Failed to fetch current user:", error);
        setUser(null); // If there's an error, make sure to set user as null
      } finally {
        setLoading(false); // Ensure loading is set to false after data is fetched
      }
    };

    fetchCurrentUser(); // Fetch the user on mount
  }, []); // Empty dependency array to fetch the user only once

  const isAuthenticated = !!user; // User is authenticated if user object is not null

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
