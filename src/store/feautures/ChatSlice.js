import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../../utils/constants";

const ChatSlice=createSlice({
    name:'chat',
    initialState:{
     messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
          state.messages.splice(LIVE_CHAT_COUNT,1)
          state.messages.unshift(action.payload)
        }
    }
})

export const {addMessage} = ChatSlice.actions;
export default ChatSlice.reducer;