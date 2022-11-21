import { SET_PRODUCT_LIST } from "./constants";

const productReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    // directly saving response to reducer from generator function
    case SET_PRODUCT_LIST:
      return [...action.data];

    default:
      return initialState;
  }
};

export default productReducer;
