import React, { useContext, useState, useEffect } from "react";
import classes from "./MoviesSection.module.css";
import Movie from "./Movie";
import { Imovie, MovieSecProps } from "../../models/@store-type";
import MoviesContext from "../../store/movies-store";
import { useNavigation } from "react-router-dom";

import MovieSkeleton from "./MovieSkeleton";
import Skeleton from "react-loading-skeleton";

const MoviesSection: React.FC<MovieSecProps> = ({ data, title }) => {
  let titleHead = "";
  const ctx = useContext(MoviesContext);
  const [isLoaded, setLoaded] = useState(true);
  const navigation = useNavigation();
  let filterArr;

  if (data.hasOwnProperty("movies")) {
    filterArr = data.movies;
  } else filterArr = data;

  

  const mainArr = filterArr.filter((movie: any) => {
    return ctx.searchQuery.toLowerCase() === ""
      ? movie
      : movie.title.toLowerCase().includes(ctx.searchQuery);
  });

  if (title === "series") titleHead = "TV Series";
  if (title === "movie") titleHead = "Movies";
  if (title === "Bookmarked Movies") titleHead = title;
  if (title === "Bookmarked Series") titleHead = title;
  if (title === "Recommended for you") titleHead = "Recommended for you";
  if (ctx.searchQuery !== "")
    titleHead = `Found ${mainArr.length} results for '${ctx.searchQuery}'`;

  return (
    <>
      <h1 className={classes.movies__header}>{titleHead}</h1>
      <section className={classes.movies__section}>
        {navigation.state === "loading" &&
          Array(mainArr.length)
            .fill(0)
            .map((item, i) => <MovieSkeleton key={i} />)}
        {navigation.state !== "loading" &&
          mainArr.map((movieData: Imovie, i: number) => (
            <Movie key={i} data={movieData} />
          ))}
      </section>
    </>
  );
};

export default MoviesSection;
