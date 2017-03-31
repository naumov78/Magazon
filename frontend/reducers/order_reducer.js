import { RECEIVE_ORDER, RECEIVE_ALL_ORDERS } from '../actions/order_actions';
import merge from 'lodash/merge';


const initialState = {
  products: [],
  orders: []
}


const OrderReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORDER:
      return merge({}, state, { products: action.order })
    case RECEIVE_ALL_ORDERS:
    debugger
      return merge({}, state, { orders: action.orders })
    default:
      return state;

  }
}

export default OrderReducer;
