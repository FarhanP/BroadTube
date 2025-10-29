import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movies in MovieList:", movies);
  return (
    <div className="px-4">
      <h1 className="text-2xl py-4 font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar scrollbar-thumb-gray-600 scrollbar-track-transparent [scrollbar-gutter:stable] hover:scrollbar-thumb-gray-600 scrollbar-hide">
        <div className="flex gap-3">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.original_title}
                poster={movie.poster_path}
              />
            ))
          ) : (
            <p className="text-white text-2xl">No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
