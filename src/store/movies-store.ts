import { createContext } from "react";

const MoviesContext = createContext({
  searchQuery: "",
  addSearchQuery: (query: string) => {},
});

export default MoviesContext;
