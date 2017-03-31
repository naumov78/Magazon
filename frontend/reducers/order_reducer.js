import { RECEIVE_ORDER } from '../actions/order_actions';
import merge from 'lodash/merge';


const initialState = {
  products: []
}


const OrderReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORDER:
      return merge({}, state, { products: action.order })
    default:
      return state;

  }
}


export default OrderReducer;
