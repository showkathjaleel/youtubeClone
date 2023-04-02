import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/feautures/ToggleSlice";
import { YOUTUBE_SEARCH_API_KEY } from "../utils/constants";
import { cacheResults } from "../store/feautures/SearchSlice";

export default function Header() {
  const dispatch = useDispatch();
  const searchCache=useSelector(store=>store.search)

  //debouncing in react - do not make api call for every keypress . instead if the next key press is less than 2 sec it will decline the api call
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false)
  useEffect(() => {
//search is using caching and debouncing
    if(searchCache){
     // setSearchQuery(json[1])
    }else{
      getSearchSuggestions()
    }

    //make api call   
    const timer = setTimeout(() => getSearchSuggestions(), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API_KEY + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({searchQuery:json[1]}))
  };

  return (
    <>
      <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1 ">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
            alt="hamberger menu"
            className="h-8 cursor-pointer"
            onClick={() => dispatch(toggleMenu())}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="youtube logo"
            className="h-8 "
          />
        </div>

        <div className="col-span-10">
          <input
            type="text"
            className="w-1/2 border border-gray-300  rounded-l-full cursor-pointer"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border border-gray-300 rounded-r-lg bg-gray-200">
            Search
          </button>
        </div>

        <div className="col-span-1">
          <img
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
            className="h-8"
            alt=""
          />
        </div>
      </div>

      {showSuggestions &&  
      <div className="fixed bg-white py-2 px-5 ml-80 w-[37rem] shadow-lg rounded-lg-border border-gray-100">
        <ul>
          {suggestions?.map((s) => (
            <li className="p-2 hover:bg-gray-100 shadow-sm" key={s}> {s} </li>
          ))}
        </ul>
      </div> }
     
    </>
  );
}
