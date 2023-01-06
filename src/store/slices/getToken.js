import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const getTokenSlice = createSlice({
  name: "getToken",
  initialState,
  reducers: {
    getTokenData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getTokenData } = getTokenSlice.actions;
export default getTokenSlice.reducer;
