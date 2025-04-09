/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./reducers/applicationService/applicationSlice";
import drawerReducer from "./reducers/applicationService/drawerSlice";

const reducers = { application: applicationReducer, drawer: drawerReducer };

const store = configureStore({
  reducer: reducers /* preloadedState, */,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
