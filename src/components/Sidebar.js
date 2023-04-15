import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
// import { MdOutlineSubscriptions } from "react-icons/fa";

export default function Sidebar() {
  const isMenuOpen = useSelector((state) => state.toggle.isMenuOpen);
  const location = useLocation();

  //early return
  if (!isMenuOpen) return null;
  //if isMenu open is false it wont go to below line

  const activeElementClass =
    "text-sm md:text-md flex gap-1 md:gap-3 py-3 my-1 bg-gray-100 font-bold  md:-mx-7 px-6 md:px-7 rounded-md shadow-md shadow-gray-300 items-center";
  const nonactiveElementClass = "";
  return (
    <div className="w-52 shadow-lg p-5 ">
      <ul className="pt-5">
        <li className="pt-1">
          <Link
            to={"/"}
            className={
              location.pathname ==="/"
                ? activeElementClass
                : nonactiveElementClass
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="hidden md:block">Home</span>
          </Link>
        </li>
        <li className="pt-1">
        {/* <MdOutlineSubscriptions/> */}
         <span>Shorts</span> 
          </li>
        <li className="pt-1">Subscriptions</li>
      </ul>
      <div className="py-3">
        <hr />
      </div>

      <ul className="pt-2">
        <li className="pt-1">Library</li>
        <li className="pt-1">History</li>
        <li className="pt-1">Your Videos</li>
        <li className="pt-1">Watch Later</li>
        <li className="pt-1">Downloads</li>
        <li className="pt-1"> Liked Videos</li>
      </ul>

      <ul className="pt-5">
        <li className="pt-1">Home</li>
        <li className="pt-1">Shorts</li>
        <li className="pt-1">Videos</li>
        <li className="pt-1">Subscription</li>
      </ul>
    </div>
  );
}
