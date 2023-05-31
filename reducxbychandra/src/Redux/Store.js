import { configureStore } from "@reduxjs/toolkit";
import objectDatareducer  from "./Action";


export const StoreCount = configureStore({

    reducer:{
        display:objectDatareducer

        
    }
})