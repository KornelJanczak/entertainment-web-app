import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/logo.svg";
import HomeIcon from "../Icons/HomeIcon";
import MoviesIcon from "../Icons/MoviesIcon";
import SeriesIcon from "../Icons/SeriesIcon";
import BookmarkIcon from "../Icons/BookmarkIcon";
import userIcon from "../../assets/image-avatar.png";

const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <img src={logoIcon} alt="logo-icon" />
        <ul className={classes.nav__ul}>
          <li className={classes.nav__li}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <span className={classes.nav__icon}>
                <HomeIcon />
              </span>
            </NavLink>
          </li>
          <li className={classes.nav__li}>
            <NavLink
              to="movie"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <span className={classes.nav__icon}>
                <MoviesIcon />
              </span>
            </NavLink>
          </li>
          <li className={classes.nav__li}>
            <NavLink
              to="series"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <span className={classes.nav__icon}>
                <SeriesIcon />
              </span>
            </NavLink>
          </li>
          <li className={classes.nav__li}>
            <NavLink
              to="/bookmark"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <span className={classes.nav__icon}>
                <BookmarkIcon />
              </span>
            </NavLink>
          </li>
        </ul>
        <img src={userIcon} alt="user-icon" className={classes.user__icon} />
      </nav>
    </header>
  );
};

export default MainNavigation;
