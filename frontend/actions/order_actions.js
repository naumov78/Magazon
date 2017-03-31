import * as APIUtil from '../util/orders_api_util';

export const RECEIVE_ORDER = "RECEIVE_ORDER";


export const receiveOrder = (order) => {
  debugger
  return {
    type: RECEIVE_ORDER,
    order: order.products
  }
}

export const createOrder = () => {
  debugger
  return (dispatch) => {
    return APIUtil.createOrder().then((order) => {
      debugger
      return dispatch(receiveOrder(order));
    });
  };
}

export const fetchOrder = (id) => {
  debugger
  return (dispatch) => {
    return APIUtil.fetchOrder(id).then((order) => {
      debugger
      return dispatch(receiveOrder(order));
    });
  };
}
