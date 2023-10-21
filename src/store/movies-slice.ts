import { createSlice } from "@reduxjs/toolkit";
import { Imovie, ImovieState } from "../models/@store-type";
import { nanoid } from "nanoid";

const moviesState: ImovieState = {
  items: [],
  trendingItems: [],
  onlyMovies: [],
  onlySeries: [],
  bookmarked: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesState,
  reducers: {
    addMovies(state, action) {
      const movies = action.payload.map((movie: Imovie) => ({
        id: nanoid(),
        ...movie,
      }));
      state.items = movies;
    },
    addOnlyMovies(state) {
      state.onlyMovies = state.items.filter(
        (movie: Imovie) => movie.category === "Movie"
      );
    },
    trendingMovies(state, action) {
      state.trendingItems = state.items.filter(
        (movie: Imovie) => movie.isTrending === true
      );
    },
    bookedMovies(state, action) {
      const booked = state.items.map((movie) =>
        movie.id === action.payload ? { ...movie, isBookmarked: true } : movie
      );
      state.items = booked;
    },
  },
});

export default moviesSlice.reducer;

export const moviesActions = moviesSlice.actions;
