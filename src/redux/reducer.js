import { ADD_TO_CART } from "./constants";

export const cartData = (initialState = {}, action = {}) => {
  console.log("reducer", action);
  switch (action.type) {
    case ADD_TO_CART:
      return action.data;
    default:
      return initialState;
  }
};
