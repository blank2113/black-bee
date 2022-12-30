import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

export const getStatusSlice = createSlice({
    name: "getStatus",
    initialState,
    reducers: {
        getStatusValue: (state,action) => {
            state.value = action.payload
        }
    }
})

export const { getStatusValue } = getStatusSlice.actions;
export default getStatusSlice.reducer