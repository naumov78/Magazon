import { RECEIVE_WATCHED_PRODUCTS } from '../actions/watched_products_actions';
import merge from 'lodash/merge';

const initialState = {
  watchedProducts: []
}

const WatchedProductsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCHED_PRODUCTS:
      return merge({}, state, { watchedProducts: action.watchedProducts });
    default:
      return state;
  }
}


export default WatchedProductsReducer;
