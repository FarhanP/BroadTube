import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const [isLoading, setIsLoading] = useState(false);

  const getPopularMovies = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, [popularMovies]);

  return { popularMovies, isLoading };
};
