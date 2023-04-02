import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";
import { YOUTUBE_DATA_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { AdVideoCard } from "./VideoCard";
const VideoContainer=()=> {
  const [videos, setVideos]=useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try{
      const { data } = await axios.get(YOUTUBE_DATA_API_URL);
      setVideos(data.items);
    }catch(err){
     console.log(err,'err in fetchVideos');
    }
   
  };

  return (
    <div className="flex flex-wrap">
      {videos && <AdVideoCard info={videos[0]}/>}
      {videos?.map((video)=>(
        <Link to={`/watch?v=${video.id}`} key={video.id}>
        <VideoCard  info={video} />
        </Link>
      ))
       
      }
     
    </div>
  );
}
export default VideoContainer;
