import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesResults: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptResults: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { gptMoviesResults, gptMovieNames } = action.payload;
      state.gptMoviesResults = gptMoviesResults;
      state.gptMovieNames = gptMovieNames;
    },
  },
});

export const { toggleGptResults, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;
