import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  resources: [],
  rrf: [],
  tag: [],
  title:'',
  SchdIntData:[],
  api:"http://192.168.5.145:8080/"
};

const Resource = createSlice({
  name: "resource",

  initialState,

  reducers: {
    resourcepost: (state, action) => {
      state.resources = action.payload;
    },

    rrf: (state, action) => {
      state.rrf = action.payload;
    },
    tagPost: (state, action) => {

      state.tag = action.payload

    },
    titles:(state,action)=>{
      state.title=action.payload
    },
    SchdIntData:(state,action)=>{
      state.SchdIntData=action.payload
    },
    api:(state,action)=>{
      state.api=action.payload
    }
  },
});

export const { resourcepost, rrf, tagPost,titles,SchdIntData,api} = Resource.actions;


export default Resource.reducer;


