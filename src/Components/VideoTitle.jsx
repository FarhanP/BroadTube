import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoTitle = ({ title, overview, trailerVideo }) => {
  return (
    <div className=" w-screen aspect-video pt-[5%] sm:pt-[15%] px-4 sm:px-26 absolute bg-gradient-to-r from-black text-white">
      <h1 className="font-bold sm:mb-0 mb-3 text-emerald-500 text-2xl sm:text-5xl">
        {title}
      </h1>
      <p className="sm:py-6 mb-5 text-sm sm:text-[16px] w-80  leading-normal line-clamp-4  sm:w-2/4">
        {overview}
      </p>
      <div className="flex gap-4">
        <button
          className="sm:text-lg text-md flex items-center gap-2 bg-red-400 rounded-lg sm:px-8 px-4 py-2 cursor-pointer
           hover:opacity-90"
          type="button"
        >
          <FontAwesomeIcon size="1x" icon={faPlay} />
          <a
            role="button"
            href={
              "https://www.youtube.com/embed/" +
              trailerVideo?.key +
              "?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&loop=1"
            }
            target="_blank"
            type="button"
          >
            Play
          </a>
        </button>
        <button
          className="sm:text-lg text-md hover:opacity-90 bg-emerald-600 rounded-lg sm:px-8 px-4 py-2 cursor-pointer"
          type="button"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
