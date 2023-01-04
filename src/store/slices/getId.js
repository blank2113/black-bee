import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: "",
}

export const getIdSlice= createSlice({
    name:'getId',
    initialState,
    reducers:{
        getIdValue: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {getIdValue} = getIdSlice.actions;
export default getIdSlice.reducer 