import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  };
};


export const fetchProduct = (category_id, product_id) => {
  return (dispatch) => {
    return APIUtil.fetchProduct(category_id, product_id).then((product) => {
      return dispatch(receiveProduct(product));
    });
  };
};


export const updateBoughtTogether = () => {
  return (dispatch) => {
    return APIUtil.updateBoughtTogether().then((product) => {
      return dispatch(receiveProduct(product));
    });
  };
};
