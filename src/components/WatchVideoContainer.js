import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../store/feautures/ToggleSlice'
import { YOUTUBE_DATA_API_SPECIFIC_VIDEO_URL } from '../utils/constants'
import { YOUTUBE_DATA_API_KEY } from '../utils/constants'


export default function WatchVideoContainer() {
    const dispatch=useDispatch()
    const [searchParams]= useSearchParams()
    const videoId=searchParams.get('v')
    const [vid,setVid]=useState('')
    console.log(videoId,'vidoId')

    useEffect(() => {
        //we are giving in toggle Menu because whenever this page loads, navbar is close.(in this page sidebar is always closed)
        dispatch(closeMenu())
        getVideo()
      }, [])

      const getVideo=async()=>{
      const {data}=await axios.get(`${YOUTUBE_DATA_API_SPECIFIC_VIDEO_URL}&id=${videoId}&key=${YOUTUBE_DATA_API_KEY}`)
      console.log(data);
        setVid(data)
      }


  return (
    <div className='p-5'>
{/* <div className='grid grid-flow-row shadow-lg'> */}
<iframe src={`https://www.youtube.com/embed/${videoId}`} width="1200" height='500' allowFullScreen></iframe>
{/* </div> */}
    </div>
  )
}
 