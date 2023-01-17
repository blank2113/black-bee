import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:false
}

export const getImgSlice = createSlice({
    name: "getImg",
    initialState,
    reducers:{
        getImgValue: (state,action)=>{
            state.value = action.payload
        }
    }
})

export const {getImgValue} = getImgSlice.actions
export default getImgSlice.reducer