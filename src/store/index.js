import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import categoryReducer from "./reducer";

//Where store is created

let reducers = combineReducers({
  store: categoryReducer,
});

const store = () => createStore(reducers, composeWithDevTools());


// store can be called here or in react root index.js
export default store();