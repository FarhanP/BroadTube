import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomimgMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";

export const useUpcoming = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const [isLoading, setIsLoading] = useState(false);

  const getUpcomingMovies = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addUpcomimgMovies(data.results));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);

  return { upcomingMovies, isLoading };
};
