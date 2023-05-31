import { configureStore } from "@reduxjs/toolkit";
import totalActions from '../src/Action'
const totalData = configureStore({
    reducer:{
        dispplay:totalActions
    }
})
export default totalData;