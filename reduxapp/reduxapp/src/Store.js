import { configureStore } from "@reduxjs/toolkit";
import ObjectReducer  from "./Action";
export const Venkat = configureStore({
    reducer:{
        display:ObjectReducer
    }
})