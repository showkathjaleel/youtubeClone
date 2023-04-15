import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./feautures/ToggleSlice";
import SearchSlice from "./feautures/SearchSlice";
import ChatSlice from "./feautures/ChatSlice";

const store=configureStore({
    reducer:{
     toggle:ToggleSlice,
     search:SearchSlice,
     chat:ChatSlice
    }
});
export default store;