import React from "react";
import { POSTER_BASE_URL } from "../utils/constants";

const MovieCard = ({ title, poster }) => {
  return (
    <div className="w-48">
      <img src={`${POSTER_BASE_URL}${poster}`} alt={title} />
    </div>
  );
};

export default MovieCard;
