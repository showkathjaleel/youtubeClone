import React from "react";

export default function Comment({ data }) {
  return (
    <>
      <div className="flex shadow-sm bg-gray-100 my-5">
        <img
          className="w-12 h-12"
          src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="
          alt=""
        />
        <div>
          <p className="font-bold">{data.name}</p>
          <p>{data.text}</p>
        </div>
      </div>
    </>
  );
}
