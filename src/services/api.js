const API_BASE_URL = "http://localhost:5000/api/core";

// Generic function to handle API requests
const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      credentials: "include", // Ensures cookies (XSRF-TOKEN) are sent
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Specific API functions
export const getParamsSite = () => fetchData("/public/paramsSite");
