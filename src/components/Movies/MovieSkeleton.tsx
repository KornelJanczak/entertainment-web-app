import React from "react";
import Skeleton from "react-loading-skeleton";
import classes from "./MovieSkeleton.module.css";

const MovieSkeleton: React.FC<any> = () => {
  return (
    <div className={classes.skeletion__movie__container}>
      <div className={classes.skeleton__first__row}>
        <Skeleton className={classes.skeleton__img} />
      </div>
    </div>
  );
};

export default MovieSkeleton;
