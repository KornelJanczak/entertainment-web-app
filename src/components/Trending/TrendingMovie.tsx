import React from "react";
import classes from "./TrendingMovie.module.css";
import { MovieProps } from "../../models/@store-type";
import bookmakredIcon from "../../assets/icon-bookmark-full.svg";
import unBookmakredIcon from "../../assets/icon-bookmark-empty.svg";
import movieCat from "../../assets/icon-category-movie.svg";
import seriesCat from "../../assets/icon-category-tv.svg";
import { Swiper, SwiperSlide } from "swiper/react";

const TrendingMovie: React.FC<MovieProps> = ({ data }) => {
  const bookmarkIcon = data.isBookmarked ? bookmakredIcon : unBookmakredIcon;
  const movieImg = require(`../../${data.thumbnail.regular.large.slice(2)}`);
  const catImg = data.category === "Movie" ? movieCat : seriesCat;
  return (
    <div
      className={classes.trend__movie__container}
      style={{ backgroundImage: `url(${movieImg})` }}
    >
      <button className={classes.movie__bookmark__btn}>
        <img
          src={bookmarkIcon}
          alt="bookmark-img"
          className={classes.movie__bookmark__icon}
        />
      </button>
      <div className={classes.trend__info__container}>
        <ul className={classes.trend__ul}>
          <li className={classes.trend__li}>{data.year}</li>
          <li className={classes.trend__li}>
            <img src={catImg} className={classes.trend__img} alt="movie-img" />
            {data.category}
          </li>
          <li className={classes.trend__li}>{data.rating}</li>
        </ul>
        <span className={classes.trend__title}>{data.title}</span>
      </div>
    </div>
  );
};

export default TrendingMovie;
