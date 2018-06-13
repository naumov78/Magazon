import { RECEIVE_STOREFRONT } from '../actions/storefronts_actions';
import merge from 'lodash/merge';

const initialState = {
  products: [],
  smallBanners: [],
  bigBanners: []
}

const StorefrontReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STOREFRONT:
      return merge({}, state, { products: action.products, smallBanners: action.smallBanners, bigBanners: action.bigBanners });
    default:
      return state;
  }
}


export default StorefrontReducer;
