import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./reducers/applicationService/applicationSlice";
import drawerReducer from "./reducers/applicationService/drawerSlice";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session"; // Using sessionStorage
import { encryptTransform } from "redux-persist-transform-encrypt"; // For encryption

const persistConfig = {
  key: "root", // This key is used to identify the persisted state
  storage: sessionStorage, // Use sessionStorage for persistence
  transforms: [
    encryptTransform({
      secretKey: import.meta.env.VITE_SECRET_KEY, // Use an environment variable for the secret key
      onError: (err) => console.error("Encryption error:", err), // Handle encryption errors
    }),
  ],
};

// Wrap reducers individually
const persistedApplicationReducer = persistReducer(
  persistConfig,
  applicationReducer
);
const persistedDrawerReducer = persistReducer(persistConfig, drawerReducer);

const store = configureStore({
  reducer: {
    application: persistedApplicationReducer,
    drawer: persistedDrawerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks for redux-persist compatibility
    }),
  devTools: process.env.NODE_ENV !== "production", // Enable devTools in non-production
});

const persistor = persistStore(store);

export default { store, persistor }; // Default export
