import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  price: Number(""),
  status_id: "",
  brand_id: Number(1),
  type_id: Number(1),
  category_id: Number(4),
};

export const getFormDataSlice = createSlice({
  name: "getFormData",
  initialState,
  reducers: {
    getFormDataName: (state, action) => {
      state.name = action.payload;
    },
    getFormDataPrice: (state, action) => {
      state.price = action.payload;
    },
    getFormDataBrandId: (state, action) => {
      state.brand_id = action.payload;
    },
    getFormDataTypeId: (state, action) => {
        state.type_id = action.payload;
    },
    getFormDataCategoryId: (state, action) => {
      state.category_id = action.payload;
    },

  },
});

export const {
  getFormDataName,
  getFormDataPrice,
  getFormDataBrandId,
  getFormDataCategoryId,
  getFormDataTypeId,
} = getFormDataSlice.actions;

export default getFormDataSlice.reducer