/*
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <p>
        <button
          type="button"
          onClick={() => setCount((prevState) => prevState + 1)}
        >
          {" "}
          Add 1{" "}
        </button>
      </p>
    </div>
  );
}

export default Counter;

*/

import React, { useState } from "react";

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
