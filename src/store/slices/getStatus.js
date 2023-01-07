import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    brandStatus: false,
    brandDelStatus: false,
}

export const getStatusSlice = createSlice({
    name: "getStatus",
    initialState,
    reducers: {
        getStatusValue: (state,action) => {
            state.value = action.payload
        },
        getBrandStatus: (state,action)=>{
            state.brandStatus= action.payload
        },
        getBrandDelStatus: (state,action)=>{
            state.brandDelStatus = action.payload
        }
        }
    })

export const { getStatusValue, getBrandStatus, getBrandDelStatus } = getStatusSlice.actions;
export default getStatusSlice.reducer