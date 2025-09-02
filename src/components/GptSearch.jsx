import React from "react";
import GptsearchBar from "./GptsearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="flex flex-col items-center mt-20 justify-center gap-30">
      <GptsearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
