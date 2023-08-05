import { createSlice } from "@reduxjs/toolkit";
import { login } from "../Actions/UserActions";

const initialState = {
  data: [],
  isRequest: false,
  isSuccess: false,
  errorMessage: "",
};

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});

export default loginSlice.reducer;
