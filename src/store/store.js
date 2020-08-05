import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "business-logic";
import thunkMiddleware from "redux-thunk";

// const state = combineReducers(reducers);
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
