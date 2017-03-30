import { RECEIVE_STOREFRONT } from '../actions/storefronts_actions';
import merge from 'lodash/merge';

const initialState = {
  storefront: []
}


const StorefrontReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STOREFRONT:
      return merge({}, state, { storefront: action.storefront });
    default:
      return state;
  }
}


export default StorefrontReducer;
