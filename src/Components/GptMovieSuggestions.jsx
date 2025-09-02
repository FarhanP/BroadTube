import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMoviesResults, gptMovieNames } = useSelector((store) => store.gpt);

  if (!gptMovieNames) {
    return (
      <div className="flex flex-col justify-center items-center gap-10 text-white text-5xl">
        <FontAwesomeIcon
          size="2x"
          icon={faSearch}
          className="text-red-400 py-2 "
        />
        <p> AI could not find your results!</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto flex flex-col gap-10">
      {gptMovieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptMoviesResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
