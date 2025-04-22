const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Generic function to handle API requests
const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      if (response.status === 401) {
        return null;
      }
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Specific API functions
export const getParamsSite = () => fetchData("/api/core/public/paramsSite");
export const getBlogCategories = () => fetchData("/api/categories");
export const getPopularTags = () => fetchData("/api/popularTags");

export const getCurrentUser = () => fetchData("/auth/me");

export const logout = () => fetchData("/auth/logout", { method: "POST" });

// Add other endpoints as needed
