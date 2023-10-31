import { json } from "react-router-dom";
import { Imovie, IstoredObj } from "../models/@store-type";

export default async function getJSON() {
  const response = await fetch("data.json");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response.json();
  }
}

export async function LoaderAlgotithm() {
  const data = await getJSON();
  const storedObjArr = JSON.parse(localStorage.getItem("idArr") as string);
  const mappedArr = data.map((movie: Imovie) => {
    const matichngId = storedObjArr.find(
      (obj: IstoredObj) => obj.title === movie.title
    );

    if (matichngId && matichngId.isBookmarked === "true") {
      return { ...movie, isBookmarked: true };
    }
    if (matichngId && matichngId.isBookmarked === "false") {
      return { ...movie, isBookmarked: false };
    }

    return movie;
  });

  localStorage.setItem("dataArr", JSON.stringify(mappedArr));

  const dataFromStorage = JSON.parse(localStorage.getItem("dataArr") as string);
  return dataFromStorage;
}
