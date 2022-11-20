import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constants";

export const addToCart = (data) => {
  console.log("data in action", data);
  return { type: ADD_TO_CART, data };
};

export const removeToCart = () => {
  console.log("data in action, remove");
  return { type: REMOVE_TO_CART };
};

export const emptyCart = () => {
  console.log("data in action, empty");
  return { type: EMPTY_CART };
};
