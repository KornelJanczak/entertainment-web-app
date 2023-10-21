import React from "react";
import classes from "./MoviesSection.module.css";
import { useAppDispatch } from "../../store/hooks-actions";
import { fetchMoviesData } from "../../store/movies-actions";
import Movie from "./Movie";
import { Imovie, MovieSecProps } from "../../models/@store-type";

const MoviesSection: React.FC<MovieSecProps> = ({ data }) => {


  return (
    <section className={classes.movies__section}>
      {data.map((movieData: Imovie, i: number) => (
        <Movie key={i} data={movieData} />
      ))}
    </section>
  );
};

export default MoviesSection;
