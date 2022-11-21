import { combineReducers } from "redux";
import { cartData } from "./reducer";
import productReducer from "./products.reducer";
export default combineReducers({ cartData, product: productReducer });
