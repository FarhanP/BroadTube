import React from "react";
import GptsearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-30">
      <GptsearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
