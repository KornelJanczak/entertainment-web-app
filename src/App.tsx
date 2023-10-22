import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks-actions";
import { fetchMoviesData } from "./store/movies-actions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import MoviesPage, { loader as MovieLoader } from "./pages/Movies";
import getJSON from "./helpers/get-json";

function App() {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchMoviesData());
  // }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage />, loader: getJSON },
        {
          path: ":category",
          element: <MoviesPage />,
          loader: MovieLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// loader: async () => {
//   try {
//     const response = await fetch("data.json");
//     return response;
//   } catch {
//     console.log(`error`);
//   }
