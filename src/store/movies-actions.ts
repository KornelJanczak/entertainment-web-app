import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./store-index";
import { moviesActions } from "./movies-slice";
import { PossibleActions } from "../models/@store-type";

export const fetchMoviesData = (): ThunkAction<
  void,
  RootState,
  unknown,
  PossibleActions
> => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("data.json");

      if (!response.ok) throw new Error("Could not fetch data!");

      const data = await response.json();

      return data;
    };
    try {
      const data = await fetchData();
      dispatch(moviesActions.addMovies(data));
    } catch {
      console.log(`err`);
    }
  };
};

export async function fetchData() {
  const response = await fetch("data.json");

  if (!response.ok) throw new Error("Could not fetch data!");

  const data = await response.json();

  return data.movies;
}
