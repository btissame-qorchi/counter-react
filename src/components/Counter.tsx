import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    setCounter((prevState: number) => prevState + 1);
    setMessage("");
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter((prevState: number) => prevState - 1);
    } else {
      setMessage("Oops! You're already at zero! Can't go lower than that!🚫");
    }
  };

  const reset = () => {
    setCounter(0);
    setMessage("");
  };
  return (
    <div className="counter-app">
      <h1>Let's Count Together!</h1>
      <p>{message}</p>
      <div className="number">{counter}</div>
      <div className="actions">
        <button onClick={reset}>0</button>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
