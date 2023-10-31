import React from "react";
import BookmarkedMovie from "../components/Bookmarked/Bookmarked";
import { LoaderAlgotithm } from "../helpers/get-json";
import { Imovie } from "../models/@store-type";
import { LoaderFunction } from "react-router-dom";


const BookmarkedPage: React.FC = () => {
  return <BookmarkedMovie />;
};

export default BookmarkedPage;

export const loader: LoaderFunction = async ({ request, params }) => {
  const data = await LoaderAlgotithm();

  const bookmarkMovie = data.filter(
    (movie: Imovie) => movie.isBookmarked && movie.category === "Movie"
  );
  const bookmarkSeries = data.filter(
    (movie: Imovie) => movie.isBookmarked && movie.category === "TV Series"
  );

  return { movie: bookmarkMovie, series: bookmarkSeries };
};
