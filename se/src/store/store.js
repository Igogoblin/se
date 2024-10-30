import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./modeSlice";

export default configureStore({
  reducer: {
    mode: themeSlice,
  },
});
