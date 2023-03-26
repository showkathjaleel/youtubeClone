import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice=createSlice({
    name:'toggle',
    initialState:{
      isMenuOpen:true
    },
    reducers:{
      toggleMenu: (state,action)=>{
        state.isMenuOpen=!state.isMenuOpen;
      },
      closeMenu:(state)=>{
        state.isMenuOpen=false;
      }
    }
})

export default ToggleSlice.reducer;
export const {toggleMenu,closeMenu} = ToggleSlice.actions