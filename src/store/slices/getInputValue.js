import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    password: "",
    username: 'admin',
}

export const getInputValueSlice = createSlice({
    name:"getInputValue",
    initialState,
    reducers:{
        getInput: (state,action) =>{
            state.password = action.payload
        },
    }
})

export const {getInput} = getInputValueSlice.actions;
export default getInputValueSlice.reducer