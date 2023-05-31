import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const initialState = {};
export const Venkatesh = createSlice({
  name: "increment",
  initialState:{
    count:0,
    getjson:[],
    apidata:[],
    duplicateApidata:[]
    
  },
  reducers: {
    Increament:(state,action)=>{
      state.count = action.payload
    },
    getData:(state, action)=>{
      // state.getjson.push(action.payload)
      state.getjson = action.payload

    },
    getApidata:(state, action)=>{
      state.apidata = action.payload

    },
    getduplicateApidata:(state, action)=>{
      axios.get("https://jsonplaceholder.typicode.com/users").then((data)=>{
           console.log("vinay");
      }
      )
      

    }

  },
});
export const {Increament} = Venkatesh.actions ;
export const {getData} = Venkatesh.actions;
export const {getApidata} = Venkatesh.actions;
export default Venkatesh.reducer;
