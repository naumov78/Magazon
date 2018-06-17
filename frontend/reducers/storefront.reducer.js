import { RECEIVE_STOREFRONT } from '../actions/storefronts.actions';

const initialState = {
  products: [],
  smallBanners: [],
  bigBanners: []
}

const StorefrontReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STOREFRONT:
      return Object.assign({}, state, { products: action.products, smallBanners: action.smallBanners, bigBanners: action.bigBanners });
    default:
      return state;
  }
}


export default StorefrontReducer;
