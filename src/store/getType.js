import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Собаки",
};

export const getTypeSlice = createSlice({
  name: "getType",
  initialState,
  reducers: {
    getName: (state,action) => {
      state.value =action.payload ;
    },
  },
});

export const { getName } = getTypeSlice.actions;

export default getTypeSlice.reducer;