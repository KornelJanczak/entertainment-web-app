import React from "react";
import classes from "./MoviesSection.module.css";
import Movie from "./Movie";
import { Imovie, MovieSecProps } from "../../models/@store-type";

const MoviesSection: React.FC<MovieSecProps> = ({ data, title }) => {
  const headTitle = title === "series" ? "TV Series" : "Movies";
  const mainTitle = title === "Recommended for you" ? title : headTitle;

  return (
    <>
      <h1 className={classes.movies__header}>{mainTitle}</h1>
      <section className={classes.movies__section}>
        {data.map((movieData: Imovie, i: number) => (
          <Movie key={i} data={movieData} />
        ))}
      </section>
    </>
  );
};

export default MoviesSection;
