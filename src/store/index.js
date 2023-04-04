import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import categoryReducer from "./store/categories";

//Where store is created

let reducers = combineReducers({
  store: categoryReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

// store can be called here or in react root index.js
export default store();