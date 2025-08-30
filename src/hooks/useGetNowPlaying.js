import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import { useEffect } from "react";

export const useGetNowPlaying = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlaying(data.results));
    console.log(data);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
