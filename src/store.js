// to create our store , contain all of our reducers that we create , applying redux thunk middleware
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; //import middleware
import { TodoReducer } from "./reducers/TodoReducers";

//create combineReducers to store all Reducers
const reducer = combineReducers({
  Todo: TodoReducer,
});

//create a state
const initialState = {};

//create Middleware
const middleware = [thunk];

//create Store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
