import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: "",
    brandName: '',
    brandId: '',
    categoryName:'',
    categoryId:'',
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
        },
        getCategoryName: (state,action)=>{
            state.categoryName = action.payload
        },
        getCategoryId: (state,action)=>{
            state.categoryId= action.payload
        }
    }
})

export const {getIdValue, setBrandName, getBrandId, getCategoryName,getCategoryId} = getIdSlice.actions;
export default getIdSlice.reducer 