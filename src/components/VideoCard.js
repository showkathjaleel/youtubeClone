import React from 'react'

export default function VideoCard({info}) {
  const snippet= info?.snippet;
  const statistics= info?.statistics;
  return (
    <div className='shadow-lg w-72 p-2 m-3' >
      <img className='rounded-lg' src={snippet?.thumbnails?.medium?.url} alt="" />
     <ul className='py-5'>
    <li className='font-bold'>{snippet?.title}</li>
    <li>{snippet?.channelTitle}</li> 
     </ul>
    </div>
  )
}

//higher order component which takes a component or return a component
export const AdVideoCard=({info})=>{
  return( 
    <div className='border bg-purple-400'>
  <VideoCard info={info} />
  </div>
  )
}
