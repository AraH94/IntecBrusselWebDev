import { createStore } from "redux";

const initialUserState = {
  name: "Adam",
};

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

const store = createStore(userReducer);

export default store;