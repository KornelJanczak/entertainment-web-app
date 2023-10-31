import { LoaderFunction, useLoaderData, defer } from "react-router-dom";
import MoviesSection from "../components/Movies/MoviesSection";
import React from "react";
import { Imovie } from "../models/@store-type";
import Trending from "../components/Trending/Trending";
import { LoaderAlgotithm } from "../helpers/get-json";

const HomePage: React.FC = () => {
  const movies = useLoaderData();

  return (
    <>
      <Trending />
      <MoviesSection title="Recommended for you" data={movies as Imovie[]} />
    </>
  );
};

export default HomePage;

export const loader: LoaderFunction = async () => {
  const loadData = await LoaderAlgotithm();
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(loadData);
    }, 500);
  });

  return defer({
    movies: await data,
  });
};
