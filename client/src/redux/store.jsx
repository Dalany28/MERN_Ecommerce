import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk"; // Correct import statement
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from './reducers/cartReducer';
import { getProductsReducer, getProductDetailsReducer } from "./reducers/productReducers"; 

const rootReducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {  
    cart: {
      cartItems: cartItemsInLocalStorage,
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
  devTools: composeWithDevTools(),
});

export default store;
