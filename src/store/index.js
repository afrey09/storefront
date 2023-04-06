import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import categoryReducer from "./categories/index.js";
import productReducer from "./products";
import cartReducer from "./cart";

//Where store is created

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,

});

const store = () => createStore(reducers, composeWithDevTools());


// store can be called here or in react root index.js
export default store();