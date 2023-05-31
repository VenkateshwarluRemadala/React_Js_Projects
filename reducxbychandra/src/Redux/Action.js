import { createSlice } from "@reduxjs/toolkit";


export const objectData = createSlice({

    name:"Increament",
    initialState:{
        count :[]
    },
    reducers:{

        Increm:(state,action)=>{
            state.count=action.payload

        },
        Decrem:(state,action)=>{
            state.count=action.payload
        }

    }
})
export const{Increm,Decrem}=objectData.actions;
export default objectData.reducer