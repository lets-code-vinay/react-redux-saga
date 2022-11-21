import {
  ADD_TO_CART,
  EMPTY_CART,
  GET_PRODUCT,
  REMOVE_TO_CART,
} from "./constants";

export const cartData = (initialState = [], action = {}) => {
  switch (action.type) {
    case GET_PRODUCT:
      return [action.data, ...initialState];

    case ADD_TO_CART:
      return [action.data, ...initialState];

    case REMOVE_TO_CART:
      initialState.length = initialState.length ? initialState.length - 1 : [];
      return [...initialState];

    case EMPTY_CART:
      initialState = [];
      return [...initialState];

    default:
      return initialState;
  }
};
