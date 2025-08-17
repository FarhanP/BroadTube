import React from "react";
import playButton from "../assets/play-button.png";

const Header = () => {
  return (
    <div className="flex justify-start items-center gap-0.5 mx-4 py-4">
      <img className="w-9 h-9" src={playButton} alt="Play button logo" />
      <h1 className="text-emerald-500 text-3xl shadow-xl">broadTube</h1>
    </div>
  );
};

export default Header;
