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
};

export type MovieProps = {
  data: Imovie;
};
