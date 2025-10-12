import { configureStore } from "@reduxjs/toolkit";
import userReducer from "/src/Utils/userSlice.js";
import moviesReducer from "/src/Utils/movieSlice.js";
import gptReducer from "/src/Utils/gptSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
