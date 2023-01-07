import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: "",
    brandName: '',
    brandId: '',
}

export const getIdSlice= createSlice({
    name:'getId',
    initialState,
    reducers:{
        getIdValue: (state,action) => {
            state.value = action.payload
        },
        setBrandName: (state,action)=>{
           state.brandName = action.payload    
        },
        getBrandId: (state,action)=>{
            state.brandId = action.payload
        }
    }
})

export const {getIdValue, setBrandName, getBrandId} = getIdSlice.actions;
export default getIdSlice.reducer 