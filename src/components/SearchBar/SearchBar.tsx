import React from "react";
import classes from "./SearchBar.module.css";
import searchIcon from "../../assets/icon-search.svg";

const SearchBar: React.FC = () => {
  return (
    <form className={classes.search__form}>
      <img
        src={searchIcon}
        alt="search-icon"
        className={classes.search__icon}
      />
      <input
        type="text"
        className={classes.search__input}
        placeholder="Search for movies or TV series"
      />
    </form>
  );
};

export default SearchBar;
