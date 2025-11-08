import React from "react";

const VideoTitle = ({ title, overview, name }) => {
  return (
    <div className=" w-fit aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="font-bold text-6xl"> {title || name}</h1>
      <p className="text-lg w-1/4 py-6 line-clamp-4">{overview}</p>

      <div className="flex">
        <button className="px-4 py-2 font-semibold bg-white m-4 rounded-lg cursor-pointer flex text-xl text-black hover:opacity-80">
          {" "}
          <img
            className="w-6 mx-2"
            src="/play-button-arrowhead.png"
            alt="play icon"
            srcSet=""
          />
          Play
        </button>
        <button className="px-4 mt-[14px] h-11 font-semibold bg-gray-500 rounded-lg text-white cursor-pointer flex text-center py-2 text-lg opacity-85">
          {" "}
          <img
            className="w-6 h-6 mt-[2px] mx-1 "
            src="/icons8-info-501.png"
            alt=""
            srcSet=""
          />{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
