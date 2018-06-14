import * as APIUtil from '../api/watchedProducts.api';

export const RECEIVE_WATCHED_PRODUCTS = "RECEIVE_WATCHED_PRODUCTS"

export const receiveWatchedProducts = (watchedProducts) => {
  return {
    type: RECEIVE_WATCHED_PRODUCTS,
    watchedProducts: watchedProducts.watched_products
  };
};


export const getWatchedProducts = () => {
  return (dispatch) => {
    return APIUtil.getWatchedProducts().then((watchedProducts) => {
      return dispatch(receiveWatchedProducts(watchedProducts));
    });
  };
};
