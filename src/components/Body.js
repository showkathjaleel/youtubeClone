import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'

export default function Body() {
  return (
    <div className='flex'>
        <Sidebar/>
       <Outlet/>
    </div>
  )
}
