// store/drawerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    open: false,
    title: "Global Drawer",
    placement: "bottom",
    contentType: null, // ✅ this is a key, not JSX
  },
  reducers: {
    openDrawer: (state, action) => {
      state.open = true;
      state.title = action.payload?.title || "Global Drawer";
      state.placement = action.payload?.placement || "bottom";
      state.contentType = action.payload?.contentType || null;
    },
    closeDrawer: (state) => {
      state.open = false;
      state.contentType = null;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
