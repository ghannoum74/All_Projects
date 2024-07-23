import { configureStore } from "@reduxjs/toolkit";
import toggleBlurbackgReducer from "./blurBackgSlice";

const store = configureStore({
  reducer: {
    toggleBackg: toggleBlurbackgReducer,
  },
});

export default store;
