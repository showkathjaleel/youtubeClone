import React from 'react'

import { useDispatch } from 'react-redux'
import { toggleMenu } from '../store/feautures/ToggleSlice'

export default function Header() {
 
  const dispatch=useDispatch()
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
        <img src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
         alt="hamberger menu" 
         className='h-8 cursor-pointer'
         onClick={()=>dispatch(toggleMenu())}/>    
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" 
        alt="youtube logo" 
        className='h-8 '/>
        </div>

        <div className='col-span-10'>
        <input type="text" className='w-1/2 border border-gray-300  rounded-l-full'/>
        <button className='border border-gray-300 rounded-r-lg bg-gray-200'>Search</button>
        </div>
       
        <div className='col-span-1'>
         <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" 
         className='h-8' alt="" />
        </div>
    </div>
  )
}
