import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const useGetNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!nowPlaying) getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addNowPlaying(data.results));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { nowPlaying, isLoading };
};
