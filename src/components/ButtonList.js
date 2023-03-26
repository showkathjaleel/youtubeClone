import React from 'react'
import Button from './Button'
const List=["All","Sports","News","Games","Music","All","Sports","News","Games","Music"]

export default function ButtonList() {
  return (
    <div className='flex'>
      {List?.map((name,index)=>(
        <div key={index}>
         <Button name={name}/>
         </div>
      ))}
   
   </div>
  )
}
