import React from "react";
import Header from "./Header.jsx";
import { useGetNowPlaying } from "../hooks/useGetNowPlaying.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import { usePopularMovies } from "../hooks/usePopularMovies.js";
import { useUpcoming } from "../hooks/useUpcoming.js";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch.jsx";
import LoadingOverlay from "./LoadingOveraly.jsx";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const { isLoading: popularLoading } = usePopularMovies();
  const { isLoading: upcomingLoading } = useUpcoming();
  const { isLoading: nowPlayingLoading } = useGetNowPlaying();

  const isLoading = popularLoading || upcomingLoading || nowPlayingLoading;

  if (isLoading) {
    return <LoadingOverlay message="Loading..." />;
  }

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
