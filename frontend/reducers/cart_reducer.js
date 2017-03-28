import { RECEIVE_CART } from '../actions/cart_actions';
import merge from 'lodash/merge';

const initialState = {
  cart: []
}


const CartReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART:
      const newState = Object.assign({}, state, { cart: action.cart });
      return newState;
    default:
      return state;
  }
};

export default CartReducer;
