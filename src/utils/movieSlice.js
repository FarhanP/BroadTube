import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomimgMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlaying,
  addTrailerVideo,
  addPopularMovies,
  addUpcomimgMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
