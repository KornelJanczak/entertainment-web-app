import React from "react";
import { Imovie } from "../../models/@store-type";
import { useLoaderData, Await } from "react-router-dom";
import MoviesSection from "../Movies/MoviesSection";
import { Suspense } from "react";
import Spinner from "../UI/Spinner";

const BookmarkedMovie: React.FC = () => {
  const { movie, series } = useLoaderData() as {
    movie: Imovie[];
    series: Imovie[];
  };

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Await resolve={movie}>
          {(loadedMovies) => (
            <MoviesSection data={loadedMovies} title="Bookmarked Movies" />
          )}
        </Await>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Await resolve={series}>
          {(loadedSeries) => (
            <MoviesSection data={loadedSeries} title="Bookmarked Series" />
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default BookmarkedMovie;
