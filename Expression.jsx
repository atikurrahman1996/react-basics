import React from "react";
const name = "atik";

function Expression() {
  return (
    <div>
      <h1>This is JSX exression {Math.random() * 100}</h1>

      <h1>This is JSX exression is: {name}</h1>

      <h2>{`My name is ${name}`}</h2>
    </div>
  );
}

export default Expression;

// h2 used templete literate
