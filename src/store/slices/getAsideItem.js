import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: 'Список товаров',
}

export const getAsideItemSlice = createSlice({
    name: "getAsideItem",
    initialState,
    reducers: {
        getItem: (state,action) =>{
            state.value = action.payload
        }
    }
})

export const {getItem} = getAsideItemSlice.actions;

export default getAsideItemSlice.reducer