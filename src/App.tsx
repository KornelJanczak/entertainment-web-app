import { useEffect, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  LoaderFunction,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage, { loader as HomeLoader } from "./pages/Home";
import { action as MovieAction } from "./components/Movies/Movie";
import BookmarkedPage, { loader as BookmarkedLoader } from "./pages/Bookmarked";
import Spinner from "./components/UI/Spinner";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  useEffect(() => {
    localStorage.setItem("idArr", JSON.stringify([]));
  }, []);

  const MoviePage = lazy(() => import("./pages/Movies"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          loader: HomeLoader,
          action: MovieAction,
        },
        {
          path: ":category",
          element: (
            <Suspense fallback={<Spinner />}>
              <MoviePage />
            </Suspense>
          ),
          loader: ({ params }) =>
            import("./pages/Movies").then((module: any) =>
              module.loader({ params })
            ),
          action: MovieAction,
        },
        {
          path: "bookmark",
          element: <BookmarkedPage />,
          loader: BookmarkedLoader,
          action: MovieAction,
        },
      ],
    },
  ]);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <RouterProvider router={router} />
    </SkeletonTheme>
  );
}

export default App;
