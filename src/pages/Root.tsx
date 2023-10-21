import React from "react";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import classes from "./Root.module.css";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <section className={classes.main__section}>
        <SearchBar />
        <Outlet />
      </section>
    </>
  );
};

export default RootLayout;
