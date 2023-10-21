import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/logo.svg";
import homeIcon from "../../assets/icon-nav-home.svg";
import moviesIcon from "../../assets/icon-nav-movies.svg";
import seriesIcon from "../../assets/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icon-nav-bookmark.svg";
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
              <img
                src={homeIcon}
                alt="home-icon"
                className={classes.nav__icon}
              />
            </NavLink>
          </li>
          <li className={classes.nav__li}>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <img
                src={moviesIcon}
                alt="movies-icon"
                className={classes.nav__icon}
              />
            </NavLink>
          </li>
          <li className={classes.nav__li}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <img
                src={seriesIcon}
                alt="home-icon"
                className={classes.nav__icon}
              />
            </NavLink>
          </li>
          <li className={classes.nav__li}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <img
                src={bookmarkIcon}
                alt="home-icon"
                className={classes.nav__icon}
              />
            </NavLink>
          </li>
        </ul>
        <img src={userIcon} alt="user-icon" className={classes.user__icon} />
      </nav>
    </header>
  );
};

export default MainNavigation;
