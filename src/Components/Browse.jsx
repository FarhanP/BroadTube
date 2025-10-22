import React from "react";
import Header from "./Header.jsx";
import { useGetNowPlaying } from "../hooks/useGetNowPlaying.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import { usePopularMovies } from "../hooks/usePopularMovies.js";
import { useUpcoming } from "../hooks/useUpcoming.js";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch.jsx";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useGetNowPlaying();
  usePopularMovies();
  useUpcoming();
  return (
    <div className="relative min-h-[calc(100svh-66px)]">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
