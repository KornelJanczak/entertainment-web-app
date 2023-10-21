import React, { useEffect } from "react";
import MoviesSection from "../components/Movies/MoviesSection";
import { fetchData, fetchMoviesData } from "../store/movies-actions";
import { json, useLoaderData } from "react-router-dom";
import { useAppSelector } from "../store/hooks-actions";
import { useAppDispatch } from "../store/hooks-actions";
import { moviesActions } from "../store/movies-slice";

const MoviesPage: React.FC<any> = (data) => {
  const dispatch = useAppDispatch();
  // const events = useLoaderData();
  // const moviesa = useAppSelector((store) => store.movies.items);
  const movies = useAppSelector((store) => store.movies.onlyMovies);

  useEffect(() => {
    dispatch(moviesActions.addOnlyMovies());
    console.log(`dis movv`);
    
  }, []);
  // console.log(events);
  // console.log(moviesa);
  console.log(movies);

  // useEffect(() => {
  //   if (movies.length > 0) return;
  //   dispatch(moviesActions.addOnlyMovies(events));
  // }, [dispatch]);

  return <MoviesSection data={movies} />;
};

export default MoviesPage;

// export async function loader() {
//   // const response = await fetch("data.json");
//   // console.log(response);
//   // if (!response.ok) {
//   //   console.log(`a`);
//   //   throw json({ message: "Could not fetch events." }, { status: 500 });
//   // } else {
//   //   const resData = await response.json();
//   //   return resData.events;
//   // }
// }
