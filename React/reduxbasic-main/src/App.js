import './App.css';
import ComponentA from "./components/ComponentA.js"
import ComponentB from "./components/ComponentB.js"

//all you need to do is npm i @reduxjs/toolkit
//I didn't need npm i redux

function App() {
	return (

		<div className="redux">
			<h1>Redux </h1> <h3>{"<Provider store={store}> in index.js"}</h3>
			<div className="App">
				<div className='App-border'>
					<h2>App component</h2>
					<div className='App-flex'>
						<ComponentA className="A" />
						<ComponentB className="B" />
					</div>
				</div>
			</div >
		</div>

	);
}

export default App;
