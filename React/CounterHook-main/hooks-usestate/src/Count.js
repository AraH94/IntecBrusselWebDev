import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0)
  // actual veranderaar begin default

  function decrement() {
    // setCount(count - 1) 
    //inscope problem variables overwriting 
    setCount(prevCount => prevCount - 1)
  } function increment() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </header>
    </div>
  );
}

export default Count;