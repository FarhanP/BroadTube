import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomimgMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const useUpcoming = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addUpcomimgMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
