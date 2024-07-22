import { configureStore } from "@reduxjs/toolkit";
import toggleBlurbackg from "./blurBackgSlice";
import fullDataSlice from "./fullDataSlice";
export default configureStore({
  reducer: {
    toggleBackg: toggleBlurbackg,
    fullData: fullDataSlice,
  },
});
