import { createStore } from 'redux';
const initialState = { user: 'Guest' };
function reducer(state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_USER':
			return { user: action.payload };
		default:
			return state;
	}
}
const store = createStore(reducer);