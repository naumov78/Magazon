import * as APIUtil from '../util/watched_products_api_util';


export const RECEIVE_WATCHED_PRODUCTS = "RECEIVE_WATCHED_PRODUCTS"

export const receiveWatchedProducts = (watchedProducts) => {
  return {
    type: RECEIVE_WATCHED_PRODUCTS,
    watchedProducts: watchedProducts.watched_products
  }
};



export const getWatchedProducts = () => {
  return (dispatch) => {
    return APIUtil.getWatchedProducts().then((watchedProducts) => {
      return dispatch(receiveWatchedProducts(watchedProducts));
    });
  };
}
