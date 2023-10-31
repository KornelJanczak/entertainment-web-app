import React from "react";
import MoviesSection from "../components/Movies/MoviesSection";
import { useLoaderData, useParams } from "react-router-dom";
import { LoaderAlgotithm } from "../helpers/get-json";
import { Imovie } from "../models/@store-type";
import { LoaderFunction, Await, defer } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "../components/UI/Spinner";

const MoviesPage: React.FC = () => {
  const movies = useLoaderData();

  const parm = useParams();

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Await resolve={movies}>
          {(loadedMovies) => (
            <MoviesSection
              title={parm.category}
              data={loadedMovies as { movies: Imovie[] }}
            />
          )}
        </Await>
      </Suspense>
    </>
  );
};

export default MoviesPage;

export const loader: LoaderFunction = async ({ request, params }) => {
  const parm = params.category === "series" ? "TV Series" : params.category;
  const loadData = await LoaderAlgotithm();

  const data = await new Promise((resolve) => {
    setTimeout(() => {
      const filteredArr = loadData.filter(
        (movie: Imovie) => movie.category.toLowerCase() === parm!.toLowerCase()
      );
      resolve(filteredArr);
    }, 500);
  });

  return defer({
    movies: await data,
  });
};
