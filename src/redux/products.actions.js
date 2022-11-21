import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  EMPTY_PRODUCTS,
  GET_PRODUCT,
} from "./constants";

// dispatched action from onClick
export const getProducts = () => {
  return { type: GET_PRODUCT }; // type will call saga
};

export const addProduct = (data) => {
  return { type: ADD_PRODUCT, data };
};

export const removeProduct = () => {
  return { type: REMOVE_PRODUCT };
};

export const emptyProduct = () => {
  return { type: EMPTY_PRODUCTS };
};
