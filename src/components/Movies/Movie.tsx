import React from "react";
import clasess from "./Movie.module.css";
import { MovieProps } from "../../models/@store-type";
import movieCat from "../../assets/icon-category-movie.svg";
import seriesCat from "../../assets/icon-category-tv.svg";
import bookmakredIcon from "../../assets/icon-bookmark-full.svg";
import unBookmakredIcon from "../../assets/icon-bookmark-empty.svg";
import { useAppDispatch } from "../../store/hooks-actions";
import { moviesActions } from "../../store/movies-slice";

const Movie: React.FC<MovieProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const movieImg = require(`../../${data.thumbnail.regular.large.slice(2)}`);
  const catImg = data.category === "Movie" ? movieCat : seriesCat;
  const bookmarkIcon = data.isBookmarked ? bookmakredIcon : unBookmakredIcon;

  return (
    <div className={clasess.movie__container}>
      <div className={clasess.movie__box}>
        <img src={movieImg} alt="movie-img" className={clasess.movie__img} />
        <button
          className={clasess.movie__bookmark__btn}
          onClick={() => dispatch(moviesActions.bookedMovies(data.id))}
        >
          <img
            src={bookmarkIcon}
            alt="bookmark-img"
            className={clasess.movie__bookmark__icon}
          />
        </button>
      </div>
      <div className={clasess.movie__info}>
        <ul className={clasess.movie__ul}>
          <li className={clasess.movie__li}>{data.year}</li>
          <li className={clasess.movie__li}>
            <img src={catImg} alt="cat-img" />
            {data.category}
          </li>
          <li className={clasess.movie__li}>{data.rating}</li>
        </ul>
        <span className={clasess.move__title}>{data.title}</span>
      </div>
    </div>
  );
};

export default Movie;
