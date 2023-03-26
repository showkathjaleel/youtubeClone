import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";
import { YOUTUBE_DATA_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const VideoContainer=()=> {
  const [videos, setVideos]=useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const { data } = await axios.get(YOUTUBE_DATA_API_URL);
    setVideos(data.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos?.map((video)=>(
        <Link to={`/watch?v=${video.id}`}>
        <VideoCard key={video.id} info={video} />
        </Link>
      ))
       
      }
     
    </div>
  );
}
export default VideoContainer;
