import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value: "Сухой корм",
}

export const getCategoriesSlice = createSlice({
    name: "getCategories",
    initialState,
    reducers: {
        getCategoriesItem : (state,action) =>{
            state.value = action.payload
        }
    }
})

export const {getCategoriesItem} = getCategoriesSlice.actions;

export default getCategoriesSlice.reducer