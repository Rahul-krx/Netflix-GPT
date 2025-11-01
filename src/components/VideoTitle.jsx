import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-lg w-1/4 py-6">{overview}</p>

      <div className="flex">
        <button className="px-8 py-2 font-semibold bg-red-700 m-4 rounded-lg cursor-pointer flex text-xl">
          {" "}
          <img
            className="w-6 "
            src=" public\play-button-arrowhead.png"
            alt="play icon"
            srcset=""
          />
          Play
        </button>
        <button className="px-8 mt-[14px] h-11 font-semibold bg-gray-400 rounded-lg text-white cursor-pointer">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
