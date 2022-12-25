import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
}

export const getInputValueSlice = createSlice({
    name:"getInputValue",
    initialState,
    reducers:{
        getInput: (state,action) =>{
            state.value = action.payload
        }
    }
})

export const {getInput} = getInputValueSlice.actions;
export default getInputValueSlice.reducer