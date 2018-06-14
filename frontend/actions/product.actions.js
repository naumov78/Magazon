import * as APIUtil from '../api/product.api';

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  };
};

export const receiveProducts = (products) => {
  return {
    type: RECEIVE_PRODUCTS,
    products
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

export const searchProduct = (query) => {
  return (dispatch) => {
    return APIUtil.searchProduct(query).then((result) => {
      return dispatch(receiveProducts(result.products));
    });
  };
};
