import React, { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count + 10)}>Plus 10</button>
      <button onClick={() => setCount(count * 2)}>Double</button>
      <button onClick={() => setCount(0)}>0</button>
    </div>
  );
}

export default CounterExample;
