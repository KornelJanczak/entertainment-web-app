import React, { useRef } from "react";
import clasess from "./Trending.module.css";
import { useLoaderData } from "react-router-dom";
import { Imovie } from "../../models/@store-type";
import TrendingMovie from "./TrendingMovie";
import { register } from "swiper/element";

import "swiper/css";

register();

const Trending: React.FC = () => {
  const data = useLoaderData() as { movies: Imovie[] };
  const swiperElRef = useRef(null) as any;

  const trendingMovies = data.movies.filter(
    (movie: Imovie) => movie.isTrending
  );

  return (
    <section className={clasess.trending__section}>
      <h1 className={clasess.trending__header}>Trending</h1>
      <div className={clasess.trending__container}>
        <swiper-container
          ref={swiperElRef}
          slides-per-view="2"
          speed="400"
          loop="true"
          className={clasess.slider__component}
          space-between="40"
        >
          {trendingMovies.map((movie: Imovie, i: number) => (
            <swiper-slide key={i}>
              <TrendingMovie key={i} data={movie} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default Trending;

{
  /* <TrendingMovie key={i} data={movie} /> */
}

{
  /* <Swiper
spaceBetween={50}
slidesPerView={3}
onSlideChange={() => console.log("slide change")}
onSwiper={(swiper: any) => console.log(swiper)}
>
{trendingMovies.map((movie: Imovie, i: number) => (
  <SwiperSlide key={i}>
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
  </SwiperSlide>
))}
</Swiper> */
}

{
  /* <Swiper
effect={"coverflow"}
spaceBetween={50}
slidesPerView={2}
freeMode={true}
grabCursor={true}
loop={true}
coverflowEffect={{
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 2.5,
}}
className={clasess.slider}
>
{trendingMovies.map((movie: Imovie, i: number) => (
  <SwiperSlide className={clasess.slider__component}>
    <TrendingMovie key={i} data={movie} />
  </SwiperSlide>
))}
</Swiper> */
}
