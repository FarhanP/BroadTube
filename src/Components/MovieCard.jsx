import React from "react";
import { POSTER_BASE_URL } from "../Utils/constants";

const MovieCard = ({ title, poster }) => {
  if (!poster) return null;
  return (
    <div className="w-48">
      <img className="h-full" src={`${POSTER_BASE_URL}${poster}`} alt={title} />
    </div>
  );
};

export default MovieCard;
