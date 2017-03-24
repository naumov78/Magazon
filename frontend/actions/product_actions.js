import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  };
};


export const fetchProduct = (id) => {
  return (dispatch) => {
    return APIUtil.fetchProduct(id).then((product) => {
      return dispatch(receiveProduct(product));
    });
  };
};


export const fetchProductFromCategory = (category_id, product_id) => {
  debugger
  return (dispatch) => {
    return APIUtil.fetchProductFromCategory(category_id, product_id).then((product) => {
      debugger
      return dispatch(receiveProduct(product));
    });
  };
};
