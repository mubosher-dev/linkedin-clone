import { applyMiddleware, createStore } from "redux";
import rootReducers from "./index";
import thunkMiddleware from "redux-thunk"
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;