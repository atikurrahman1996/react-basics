import classes from "../styles/Button.module.css";

import React from "react";

function Button({ children }) {
  return (
    <div className={classes.button}>
      <span> {children} </span>
    </div>
  );
}

export default Button;
