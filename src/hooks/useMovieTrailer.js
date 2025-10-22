import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const [isLoading, setIsLoading] = useState(false);

  const getMovieVideos = async () => {
    if (!movieId) return;
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      if (json.results?.length > 0) {
        dispatch(addTrailerVideo(json.results[0]));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!trailerVideo) getMovieVideos();
  }, []);

  return { trailerVideo, isLoading };
};

export default useMovieTrailer;
