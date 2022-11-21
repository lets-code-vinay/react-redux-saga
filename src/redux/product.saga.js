import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { product_apis } from "../Configs/apis";
import { GET_PRODUCT, SET_PRODUCT_LIST } from "./constants";

/**
 * api will called here
 */
function* getProduct() {
  const { data: { products = [] } = {} } = yield axios // yield is used here for async operation like fetching data
    .get(product_apis.PRODUCT_LIST); //api

  // it will store data in redux store as per type

  yield put({ type: SET_PRODUCT_LIST, data: products });
}

// This function will be call from action according to type -GET_PRODUCT
function* productSaga() {
  yield takeEvery(GET_PRODUCT, getProduct); // getProduct will be called to get data
  // other actions will be listed here and call these as per type
}

export default productSaga;
