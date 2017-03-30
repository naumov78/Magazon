import * as APIUtil from '../util/watched_products_api_util';


export const RECEIVE_WATCHED_PRODUCTS = "RECEIVE_WATCHED_PRODUCTS"

export const receiveWatchedProducts = (watchedProducts) => {
  return {
    type: RECEIVE_WATCHED_PRODUCTS,
    storefront: watchedProducts.watchedProducts
  }
};



export const getWatchedProducts = () => {
  return (dispatch) => {
    return APIUtil.getWatchedProducts().then((watchedProducts) => {
      return dispatch(receiveStorefront(watchedProducts));
    });
  };
}
