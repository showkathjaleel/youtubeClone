import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'

export default function Body() {
  return (
    <div className='flex'>
          {/* <div className="grid grid-flow-col p-5 m-2 shadow-lg"> */}
        <div className="flex col-span-1 ">
        <Sidebar/>
        </div>
        <div className="flex col-span-11 p-5">
       <Outlet/>
       </div>
    </div>
  )
}
