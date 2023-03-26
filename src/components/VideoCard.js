import React from 'react'

export default function VideoCard({info}) {
  const snippet= info?.snippet;
  const statistics= info?.statistics;
  console.log(snippet,'snippet') 
  //  const { snippet , statistics }= info;
  //   console.log(snippet,'snippet') 
  // const {channelTitle,title,thumbnails}=snippet
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
