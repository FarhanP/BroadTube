import React, { useRef, useState } from "react";
import ai from "../utils/Gemini";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptsearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [aiResponseErr, setAiResponseErr] = useState(false);

  const mediaQuery = window.matchMedia("(max-width: 640px)"); // Tailwind's 'sm' breakpoint

  const handleGptSearch = async () => {
    const value = searchText.current.value;
    console.log("Searching for:", value);

    const gptQuery = `You are an expert in movie recommendations. Your task is to output exactly 5 movie names based on the user's query.
      Rules:
      - Output must be only 5 movie names.
      - Names must be separated by commas.
      - No numbering, no explanations, no extra words.
      - Do not add anything before or after the list.
      Format example: Movie1, Movie2, Movie3, Movie4, Movie5
          Query: ${value}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${gptQuery}`,
    });
    console.log(response.text);
    if (!aiResponseErr) {
      setAiResponseErr(true);
    } else {
      setAiResponseErr(false);
    }
    const moviesList = response.text.split(",").map((movie) => movie.trim());
    console.log("Movies List:", moviesList);
    // For each movie name, you can call a function to search and display movies
    const gptMovies = moviesList.map((movie) => searchMovies(movie));
    const movieResults = await Promise.all(gptMovies);
    console.log("Movie Results:", movieResults);
    dispatch(
      addGptMovies({
        gptMoviesResults: movieResults,
        gptMovieNames: moviesList,
      })
    );
    searchText.current.value = "";
  };

  const searchMovies = async (movie) => {
    // Function to search movies based on AI response
    // You can implement this function to fetch and display movies
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const response = await data.json();
    return response.results;
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex gap-5 justify-center items-center"
      >
        <input
          ref={searchText}
          type="text"
          name="gptsearch"
          autoComplete="on"
          className="p-4 bg-white max-h-10 sm:min-w-150 rounded-md"
          placeholder={`${
            mediaQuery.matches
              ? "Find Movies with AI"
              : "Find your favourtie Movies using AI"
          }`}
        />
        <button
          onClick={handleGptSearch}
          className="text-white hover:opacity-90 cursor-pointer gap-2 flex items-center px-6 py-2 rounded-lg  text-md bg-emerald-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptsearchBar;
