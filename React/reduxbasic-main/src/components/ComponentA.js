import store from '../Store';

function ComponentA() {

	//logic for handling the option change
	const handleChange = (e) => {
		//store.dispatch sends the arguments to the reducer (indirectly?)
		//type is used to identify which case (= the set of instructions) to use in the reducer
		//the payload argument is used in the reducer instructions to create the new state (in this case the number selected)
		store.dispatch({ type: "number/changeNumber", payload: e.target.value });
	}

	return (
		<div className="A">
			<h2>ComponentA</h2>
			<p>Pick a number</p>
			<select onChange={handleChange}>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select>
		</div>
	)
}

export default ComponentA