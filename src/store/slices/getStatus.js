import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    brandStatus: false,
    brandDelStatus: false,
    categoryStatus: false,
    categoryStatusDel: false,
    typeStatus: false,
    typeStatusDel: false,
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
        },
        getCategoryStatus: (state,action)=>{
            state.categoryStatus = action.payload
        },
        getCategoryStatusDel: (state,action)=>{
            state.categoryStatusDel = action.payload
        },
        getTypeStatus:(state,action) =>{
            state.typeStatus = action.payload
        },
        getTypeStatusDel:(state,action)=>{
            state.typeStatusDel = action.payload
        }
        }
    })

export const { getStatusValue, 
    getBrandStatus, 
    getBrandDelStatus, 
    getCategoryStatus, 
    getCategoryStatusDel,
    getTypeStatus,
    getTypeStatusDel,
} = getStatusSlice.actions;
export default getStatusSlice.reducer