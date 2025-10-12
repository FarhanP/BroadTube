import { configureStore } from "@reduxjs/toolkit";
import gptReducer from "../Utils/gptSlice";
import userReducer from "../Utils/userSlice";
import moviesReducer from "../Utils/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
