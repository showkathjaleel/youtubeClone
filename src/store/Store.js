import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./feautures/ToggleSlice";
const store=configureStore({
    reducer:{
     toggle:ToggleSlice
    }
})
export default store;