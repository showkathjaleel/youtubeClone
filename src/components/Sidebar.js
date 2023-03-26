import React from 'react'
import { useSelector } from 'react-redux' 
import { Link } from 'react-router-dom'
export default function Sidebar() {
  const isMenuOpen=useSelector(state=>state.toggle.isMenuOpen)
 //early return
   if(!isMenuOpen ) return null
//if isMenu open is false it wont go to below line
  return (
    <div className='w-48 shadow-lg p-5'>
       <ul className='pt-5'>
        <li className='pt-1'>
         <Link to={'/'}> Home</Link></li>
        <li className='pt-1'>Shorts</li>
        <li className='pt-1'>Videos</li>
        <li className='pt-1'>Subscription</li>
       </ul>

       <ul className='pt-5'>
        <li className='pt-1'>Home</li>
        <li className='pt-1'>Shorts</li>
        <li className='pt-1'>Videos</li>
        <li className='pt-1'>Subscription</li>
       </ul>

       <ul className='pt-5'>
        <li className='pt-1'>Home</li>
        <li className='pt-1'>Shorts</li>
        <li className='pt-1'>Videos</li>
        <li className='pt-1'>Subscription</li>
       </ul>
    </div>
  )
}
