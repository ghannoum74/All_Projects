import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBackgBlur: false,
  isMenuVisible: false,
};

export const blurBackgSlice = createSlice({
  name: "getBlur",
  initialState,
  reducers: {
    toggleTheBlur: (state) => {
      state.isBackgBlur = !state.isBackgBlur;
      state.isMenuVisible = !state.isMenuVisible;
    },
    resetTheState: (state) => {
      state.isBackgBlur = false;
      state.isMenuVisible = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheBlur, resetTheState } = blurBackgSlice.actions;

export default blurBackgSlice.reducer;
