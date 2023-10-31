import React, { Suspense, useEffect, useState } from "react";
import clasess from "./Movie.module.css";
import { IstoredObj, MovieProps } from "../../models/@store-type";
import movieCat from "../../assets/icon-category-movie.svg";
import seriesCat from "../../assets/icon-category-tv.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useFetcher, json, Await } from "react-router-dom";
import { ActionFunction } from "react-router-dom";
import playIcon from "../../assets/icon-play.svg";
import BookmarkedFullIcon from "../Icons/BookmarkedFullIcon";
import BookmarkedEmptyIcon from "../Icons/BookmarkedEmptyIcon";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MovieSkeleton from "./MovieSkeleton";

const Movie: React.FC<MovieProps> = ({ data }) => {
  const fetcher = useFetcher();
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const movieImg = require(`../../${data.thumbnail.regular.large.slice(2)}`);
  const catImg = data.category === "Movie" ? movieCat : seriesCat;
  const bookmarkIcon = data.isBookmarked ? (
    <BookmarkedFullIcon />
  ) : (
    <BookmarkedEmptyIcon />
  );
  const bookmarkHover = data.isBookmarked
    ? clasess.bookmarked__hover
    : clasess.no__bookmarked__hover;

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setLoadStarted(true);
  }, []);

  return (
    <div className={clasess.movie__container}>
      <div className={clasess.movie__box}>
        <LazyLoadImage
          key={data.title + "image"}
          alt={data.title + "image"}
          src={movieImg}
          // placeholder={<span>Loading..</span>}
          // effect="blur"
          className={clasess.movie__img}
          onLoad={handleLoad}
          // beforeLoad={handleLoadStarted}
        />
        {!isLoaded && isLoadStarted && (
          <Skeleton
            className={clasess.movie__skeleton__img}
            duration={4}
            width={350}
            height={217}
          />
        )}
        {isLoaded && isLoadStarted && (
          <div>
            <fetcher.Form method="post">
              <input type="hidden" name="id" value={data.title} />
              <input
                type="hidden"
                name="isBookmarked"
                value={!data.isBookmarked as any}
              />
              <button className={clasess.movie__bookmark__btn} type="submit">
                <span
                  className={`${clasess.movie__bookmark__icon} ${bookmarkHover}`}
                >
                  {bookmarkIcon}
                </span>
              </button>
              <button className={clasess.movie__play}>
                <img src={playIcon} alt="play-icon" />
                Play
              </button>
            </fetcher.Form>
          </div>
        )}
      </div>
      <div className={clasess.movie__info}>
        <ul className={clasess.movie__ul}>
          <li className={clasess.movie__li}>{data.year}</li>
          <li className={clasess.movie__li}>
            <img
              src={catImg}
              alt="cat-img"
              className={clasess.movie__li__icon}
            />
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

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const mediaId = data.get("id");
  const isBookmarked = data.get("isBookmarked");
  const storedObj = { title: mediaId, isBookmarked: isBookmarked };
  const storedObjArr = JSON.parse(localStorage.getItem("idArr") as string);
  const existingIndex = storedObjArr.findIndex(
    (item: IstoredObj) => item.title === storedObj.title
  );

  if (existingIndex !== -1) {
    storedObjArr.splice(existingIndex, 1, storedObj);
  } else {
    storedObjArr.push(storedObj);
  }

  localStorage.setItem("idArr", JSON.stringify(storedObjArr));

  return json({ mediaId, isBookmarked });
};

// {
//   return (
//     <div className={clasess.movie__container}>
//       <div className={clasess.movie__box}>
//         {!isLoaded && isLoadStarted && (
//           <Skeleton
//             className={clasess.movie__skeleton__img}
//             width={350}
//             height={217}
//           />
//         )}
//         {isLoaded && isLoadStarted && (
//           <div>
//             <img
//               key={data.title + "image"}
//               alt={data.title + "image"}
//               src={movieImg}
//               // placeholder={<span>Loading..</span>}
//               // effect="blur"
//               className={clasess.movie__img}
//               // onLoad={handleLoad}
//               // beforeLoad={handleLoadStarted}
//             />

//             <fetcher.Form method="post">
//               <input type="hidden" name="id" value={data.title} />
//               <input
//                 type="hidden"
//                 name="isBookmarked"
//                 value={!data.isBookmarked as any}
//               />
//               <button className={clasess.movie__bookmark__btn} type="submit">
//                 <span
//                   className={`${clasess.movie__bookmark__icon} ${bookmarkHover}`}
//                 >
//                   {bookmarkIcon}
//                 </span>
//               </button>
//               <button className={clasess.movie__play}>
//                 <img src={playIcon} alt="play-icon" />
//                 Play
//               </button>
//             </fetcher.Form>
//           </div>
//         )}
//       </div>
//       <div className={clasess.movie__info}>
//         <ul className={clasess.movie__ul}>
//           <li className={clasess.movie__li}>{data.year}</li>
//           <li className={clasess.movie__li}>
//             <img
//               src={catImg}
//               alt="cat-img"
//               className={clasess.movie__li__icon}
//             />
//             {data.category}
//           </li>
//           <li className={clasess.movie__li}>{data.rating}</li>
//         </ul>
//         <span className={clasess.move__title}>{data.title}</span>
//       </div>
//     </div>
//   );
