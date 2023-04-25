import './App.css';
import React, { useState } from 'react';

function App() {
	const [state, setState] = useState({ count: 8, name: "Ara" });
	const count = state.count;
	const name = state.name;

	// type a name in the inputfield and it will change in the text
	const [firstName, setName] = useState('');
	const handleChange = (e) => {
		setName(e.target.value)
	}

	//spread operator is used to prevent overwriting previous info
	function decrement() {
		setState(prevState => { return { ...prevState, count: prevState.count - 1 } });
	}

	function increment() {
		setState(prevState => { return { ...prevState, count: prevState.count + 1 } });
	}

	return (
		<div className="App">
			<header className="App-header">
				<p>Hello {firstName}</p>
				<input type="text" value={firstName} onChange={handleChange}></input>
				<button onClick={decrement}>-</button>
				<span>{count}</span>
				<button onClick={increment}>+</button>
				<p>Name: {name}</p>
			</header>
		</div>
	);
}

export default App;