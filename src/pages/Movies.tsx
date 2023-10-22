import React from "react";
import MoviesSection from "../components/Movies/MoviesSection";
import { useLoaderData, useParams } from "react-router-dom";
import getJSON from "../helpers/get-json";
import { Imovie } from "../models/@store-type";
import { LoaderFunction } from "react-router-dom";
import { nanoid } from "nanoid";

const MoviesPage: React.FC<any> = (data) => {
  const loaderData = useLoaderData();
  const parm = useParams();

  return <MoviesSection title={parm.category} data={loaderData as Imovie[]} />;
};

export default MoviesPage;

export const loader: LoaderFunction<{
  params: { category: string };
}> = async ({ params }) => {
  const parm = params.category === "series" ? "TV Series" : params.category;
  const data = await getJSON();
  const storedId = localStorage.getItem("id") as string;
  console.log(storedId);

  const filteredArr = data
    .filter(
      (movie: Imovie) => movie.category.toLowerCase() === parm?.toLowerCase()
    )
    .map((movie: Imovie) => {
      const updateMovie = { id: nanoid(), ...movie };

      if (movie.title === storedId) {
        return { ...updateMovie, isBookmarked: true };
      }

      return updateMovie;
    });
  console.log(filteredArr);

  
  localStorage.removeItem("id");
  
  return filteredArr;
};

// const addBokkmark = data.map((movie: Imovie) =>
// movie.id === storedId ? { ...movie, isBookmarked: true } : movie
// );
// const addID = data.map((movie: Imovie) => {
  //   const updateMovie = { id: nanoid(), ...movie };
  
  //   console.log(storedId);
  //   if (movie.id === storedId) {
    //     return { ...updateMovie, isBookmarked: true };
    //   }

    //   return updateMovie;
    // });
    // console.log(addID);
    
    // const onlyMovies = addID.filter(
    //   (movie: Imovie) => movie.category.toLowerCase() === parm?.toLowerCase()
    // );
    
    // return onlyMovies;