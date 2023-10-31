import React, { useContext, useEffect } from "react";
import classes from "./SearchBar.module.css";
import searchIcon from "../../assets/icon-search.svg";
import MoviesContext from "../../store/movies-store";
import { useNavigation, useParams } from "react-router-dom";

const SearchBar: React.FC = () => {
  const nav = useNavigation();
  const params = useParams();
  const ctx = useContext(MoviesContext);

  const addChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    ctx.addSearchQuery(e.target.value);
  };



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
        onChange={addChangeHandler}
        value={ctx.searchQuery}
      />
    </form>
  );
};

export default SearchBar;
