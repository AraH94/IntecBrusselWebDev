import './App.css';
import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(2)
  const [name, setName] = useState("Bene");

  //spread operator is used to prevent overwriting previous info
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <p>Name: {name}</p>
      </header>
    </div>
  );
}

export default App;