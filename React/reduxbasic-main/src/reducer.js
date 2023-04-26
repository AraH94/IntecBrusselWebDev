const initialState = { choice: 1 };

//reducer parameters are (state, action)
//state is the current state retrieved from the store
//actions are passed into numberReducer from the select button using store.dispatch in ComponentA
//the action object has two properties, payload and type.
//type is used to identify which set of instructions to use (through switch{case:})
//payload is used to calculate a new state

//in this example we use "number/changeNumber" on the select option to identify which instruction set to use in the reducer
//the value of the selected option gets passed into the reducer through the action.payload property 
//the instructions create a new state with the choice property set as action.payload -> in this case the value of the selected option
const numberReducer = (state = initialState, action) => {
	switch (action.type) {
		case "number/changeNumber":
			{
				return { ...state, choice: action.payload };
			}
		default:
			{ return state; }
	}
}

export default numberReducer;