import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addItems:(state,action)=>{
            state.push(action.payload);
        },
    },
});
export const {addItems} = cartSlice.actions;
export default cartSlice.reducer;