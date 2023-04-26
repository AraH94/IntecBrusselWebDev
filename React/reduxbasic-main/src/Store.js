import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./reducer";

const store = configureStore({ reducer: numberReducer });
//createStore has been replaced by configureStore in a (recent) update
//the argument for configureStore has to be reducer (key) : reducer (value)

export default store;