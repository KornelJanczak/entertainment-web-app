import React from "react";
import classes from "./Spinner.module.css";

const Spinner: React.FC = () => {
  return <span className={classes.loader}></span>;
};

export default Spinner;
