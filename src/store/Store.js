import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./feautures/ToggleSlice";
import SearchSlice from "./feautures/SearchSlice";

const store=configureStore({
    reducer:{
     toggle:ToggleSlice,
     search:SearchSlice
    }
});
export default store;