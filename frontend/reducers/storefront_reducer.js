import { RECEIVE_STOREFRONT } from '../actions/storefronts_actions';
import merge from 'lodash/merge';

const initialState = {
  storefront: [],
  smallBanners: [],
  bigBanners: []
}


const StorefrontReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STOREFRONT:
      return merge({}, state, { storefront: action.storefront, smallBanners: action.smallBanners, bigBanners: action.bigBanners });
    default:
      return state;
  }
}


export default StorefrontReducer;
