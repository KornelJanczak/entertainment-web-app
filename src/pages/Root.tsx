import React from "react";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import classes from "./Root.module.css";
import { SearchBarProps } from "../models/@store-type";
import { useNavigation } from "react-router-dom";
import Spinner from "../components/UI/Spinner";

const RootLayout: React.FC = () => {
  const navigate = useNavigation();

  return (
    <>
      <MainNavigation />
      <section className={classes.main__section}>
        <SearchBar />
        {navigate.state === "loading" ? <Spinner /> : <Outlet />}
      </section>
    </>
  );
};

export default RootLayout;
