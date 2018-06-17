import { RECEIVE_ORDER, RECEIVE_ALL_ORDERS } from '../actions/order.actions';

const initialState = {
  products: [],
  orders: []
}

const OrderReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORDER:
      return Object.assign({}, state, { products: action.order })
    case RECEIVE_ALL_ORDERS:
      return Object.assign({}, state, { orders: action.orders })
    default:
      return state;

  }
}

export default OrderReducer;
