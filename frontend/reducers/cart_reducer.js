import { RECEIVE_CART } from '../actions/cart_actions';
import merge from 'lodash/merge';

const initialState = {}


const CartReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART:
      return merge({}, state, action.cart);
    default:
      return state;
  }
}

export default CartReducer;
