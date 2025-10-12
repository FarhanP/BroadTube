import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../Utils/movieSlice";
import { useEffect } from "react";

export const useGetNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlaying);

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
    !nowPlaying && getNowPlayingMovies();
  }, []);
};
