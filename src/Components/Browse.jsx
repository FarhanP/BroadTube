import React from "react";
import Header from "./Header";
import { useGetNowPlaying } from "../hooks/useGetNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useUpcoming } from "../hooks/useUpcoming";

const Browse = () => {
  useGetNowPlaying();
  usePopularMovies();
  useUpcoming();
  return (
    <div className="relative">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
