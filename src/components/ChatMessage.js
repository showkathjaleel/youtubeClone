import React from 'react'

export default function ChatMessage({name,message}) {
  return (
    <div className='px-2 shadow-sm items-center p-2 flex'>
         <img
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
            className="h-8"
            alt=""
          />
        <span className='font-bold'>{name}</span>
        <span className='pl-2'>{message}</span>

    </div>
  )
}
