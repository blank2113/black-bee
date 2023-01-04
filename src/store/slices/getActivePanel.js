import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: false,
}
export const getActivePanelSlice = createSlice({
    name: 'getActivePanel',
    initialState,
    reducers:{
        getActivePanelValue: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {getActivePanelValue} = getActivePanelSlice.actions
export default getActivePanelSlice.reducer