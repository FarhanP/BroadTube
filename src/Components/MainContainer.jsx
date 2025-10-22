import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const featuredMovie = movies ? movies[0] : null;
  console.log("Featured Movie:", featuredMovie);

  if (!featuredMovie) return;

  const { original_title, overview, id } = featuredMovie;
  console.log("MainContainer Movie Details:", featuredMovie);

  return (
    <div>
      <VideoTitle
        trailerVideo={trailerVideo}
        title={original_title}
        overview={overview}
      />
      <VideoBackground trailerVideo={trailerVideo} movieId={id} />
    </div>
  );
};

export default MainContainer;
