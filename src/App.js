import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1 className="title">Counter: {count}</h1>
      <div className="button-container">
        <button className="button" onClick={incrementCount}>Increment</button>
        <button className="button" onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
