import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks-actions";
import { fetchMoviesData } from "./store/movies-actions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import MoviesPage from "./pages/Movies";

import { moviesActions } from "./store/movies-slice";

function App() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((store) => store);

  useEffect(() => {
    dispatch(fetchMoviesData());
  }, [dispatch]);

  console.log(`home`);
  console.log(movies);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/movies",
          element: <MoviesPage />,
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
