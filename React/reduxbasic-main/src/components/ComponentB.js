import { useSelector } from "react-redux";

function ComponentB() {
	//the useSelector hook allows us to retrieve the state from the store
	//we retrieve the value-property from the state 
	const number = useSelector(state => state.choice);

	return (
		<div className="B">
			<h2>ComponentB</h2>
			<p>The number you picked is</p>
			<p>{number}</p>
		</div>
	)
}

export default ComponentB