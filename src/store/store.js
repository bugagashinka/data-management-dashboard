import { createStore, combineReducers } from "redux";
import reducers from "business-logic";

// const state = combineReducers(reducers);
const store = createStore(reducers);

export default store;
