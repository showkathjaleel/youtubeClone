import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../store/feautures/ChatSlice'
import { generateRandomName, generateRandomString } from '../utils/helper'

export default function LiveChat() {
    const dispatch=useDispatch()
    const chatMessages=useSelector(store=>store.chat.messages)
    const [liveMessage,setLiveMessage]=useState('')
    console.log(liveMessage,'liveMessageeeeeeeeeeeeee')

    useEffect(()=>{
         const timer= setInterval(()=>{
          //API polling       
        dispatch(addMessage({
            name:generateRandomName(),
            message:generateRandomString(20)
        }))
      },2000)
         return ()=> clearInterval(timer)
          

    },[])
    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name:"ameer",
        message:liveMessage
      }))
      setLiveMessage('')
    }

    
  return (
    <>
    <div className='p-2 ml-2 w-full h-[500px] shadow-lg border border-black bg-slate-100 rounded mr-2 overflow-y-scroll flex flex-col-reverse'>
      {chatMessages.map((chatmsg)=>(
         <ChatMessage name={chatmsg.name} message={chatmsg.message}/>
      )
      )}
       
        </div>
        <form className='w-full border border-black ml-2 p-2 ' onSubmit={handleSubmit}>
          <input  className='w-96 pl-2' type="text" name="" id="" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
          <button className='bg-green-100 px-2' >Send</button>
        </form>

        </>
  )
}
