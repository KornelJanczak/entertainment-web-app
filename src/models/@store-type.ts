import { ReactNode } from "react";

export type Imovie = {
  id?: string;
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

export type ImovieState = {
  items: Imovie[];
  trendingItems: Imovie[];
  onlyMovies: Imovie[];
  onlySeries: Imovie[];
  bookmarked: Imovie[];
};

export type PossibleActions = {
  type: "movies/addMovies";
};

export type MovieSecProps = {
  data: any;
  title: string | undefined;
};

export type MovieProps = {
  data: Imovie;
};

export type IstoredObj = {
  title: string;
  isBookmarked: string;
};

export type SearchBarProps = {
  onFilter: () => void;
};

export interface ContextProviderProps {
  children: ReactNode;
}

export interface MoviesContextType {
  searchQuery: string;
  addSearchQuery: (query: string) => void;
}
