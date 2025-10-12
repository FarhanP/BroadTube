import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMoviesResults, gptMovieNames } = useSelector((store) => store.gpt);

  if (!gptMovieNames) {
    return (
      <div className="flex flex-col justify-center items-center gap-10 text-white sm:text-5xl text-3xl">
        <FontAwesomeIcon
          size="1x"
          icon={faSearch}
          className="text-red-400 py-2"
        />
        <p className="text-center">No resuts found yet!</p>
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
