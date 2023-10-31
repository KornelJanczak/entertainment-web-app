import React, { useState } from "react";
import MoviesContext from "./movies-store";
import { ContextProviderProps, MoviesContextType } from "../models/@store-type";

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const addQueryHandler = (query: string) => {
    setSearchQuery(query);
  };

  const moviesContext: MoviesContextType = {
    searchQuery: searchQuery as string,
    addSearchQuery: addQueryHandler,
  };

  return (
    <MoviesContext.Provider value={moviesContext}>
      {children}
    </MoviesContext.Provider>
  );
};

export default ContextProvider;
