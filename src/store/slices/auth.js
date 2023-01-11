import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 'adminpassword',
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuthStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getAuthStatus } = authSlice.actions;
export default authSlice.reducer;
