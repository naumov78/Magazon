import { RECEIVE_CART } from '../actions/cart.actions';

const initialState = {
  cart: []
}

const CartReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART:
      return Object.assign({}, state, { cart: action.cart });
    default:
      return state;
  }
};

export default CartReducer;
