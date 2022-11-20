import { ADD_TO_CART } from "./constants";

export const addToCart = (data) => {
  console.log("data in action", data);
  return { type: ADD_TO_CART, data };
};
