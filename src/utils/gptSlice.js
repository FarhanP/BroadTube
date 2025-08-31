import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptResults: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptResults } = gptSlice.actions;

export default gptSlice.reducer;
