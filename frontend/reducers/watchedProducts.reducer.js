import { RECEIVE_WATCHED_PRODUCTS } from '../actions/watchedProducts.actions';

const initialState = {
  watchedProducts: []
}

const WatchedProductsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCHED_PRODUCTS:
      return Object.assign({}, state, { watchedProducts: action.watchedProducts });
    default:
      return state;
  }
}


export default WatchedProductsReducer;
