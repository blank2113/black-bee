import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value: false,
}

export const getActiveBtnSlice  = createSlice({
    name: 'getActiveBtn',
    initialState,
    reducers:{
        getActiveBtnValue: (state,action) =>{
            state.value = action.payload
        }
    }
})

export const {getActiveBtnValue} = getActiveBtnSlice.actions;
export default getActiveBtnSlice.reducer