import { createSlice } from "@reduxjs/toolkit";


const songslice = createSlice({
    name:"song",
    initialState:{
        info:null,
    },
    reducers:{
        addsong:(state,action)=>{
            state.info = action.payload;
        },
        removesong:(state,action)=>{
            state.info=""
        }
    }
})

export const {addsong,removesong} = songslice.actions
export default songslice.reducer