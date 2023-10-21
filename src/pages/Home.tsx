import SearchBar from "../components/SearchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks-actions";
import MoviesSection from "../components/Movies/MoviesSection";

function HomePage() {
  const movies = useAppSelector((store) => store.movies.items);

  return <MoviesSection data={movies} />;
}

export default HomePage;
