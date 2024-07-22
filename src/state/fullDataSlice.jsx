import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Fullname: "",
  PhoneNumber: "",
  Email: "",
  Details: "",
};

const fullDataSlice = createSlice({
  name: "getData",
  initialState,
  reducers: {
    setFullName(state, action) {
      state.Fullname = action.payload.Fullname;
    },
    setPhoneNumber(state, action) {
      state.PhoneNumber = action.payload.PhoneNumber;
    },
    setEmail(state, action) {
      state.Email = action.payload.Email;
    },
    setDetails(state, action) {
      state.Details = action.payload.Details;
    },
  },
});

export const { setFullName, setPhoneNumber, setEmail, setDetails } =
  fullDataSlice.actions;

export default fullDataSlice.reducer;
