import { useLoaderData } from "react-router-dom";
import MoviesSection from "../components/Movies/MoviesSection";
import React from "react";
import { Imovie } from "../models/@store-type";

const HomePage: React.FC = () => {
  const events = useLoaderData();

  return (
    <MoviesSection title="Recommended for you" data={events as Imovie[]} />
  );
};

export default HomePage;
