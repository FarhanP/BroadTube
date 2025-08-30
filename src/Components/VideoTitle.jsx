import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-12 absolute bg-gradient-to-r from-black  text-white">
      <h1 className="font-bold text-emerald-500 text-5xl">{title}</h1>
      <p className="py-6 w-2/4">{overview}</p>
      <div className="flex gap-4">
        <button
          className="text-lg flex items-center gap-2 bg-red-400 rounded-lg px-8 py-2 cursor-pointer
           hover:opacity-90"
          type="button"
        >
          <FontAwesomeIcon size="1x" icon={faPlay} />
          <span>Play</span>
        </button>
        <button
          className="text-lg hover:opacity-90 bg-emerald-600 rounded-lg px-8 py-2 cursor-pointer"
          type="button"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
