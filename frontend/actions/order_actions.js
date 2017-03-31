import * as APIUtil from '../util/orders_api_util';

export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ALL_ORDERS = "RECEIVE_ALL_ORDERS";


export const receiveOrder = (order) => {
  return {
    type: RECEIVE_ORDER,
    order: order.products
  }
}

export const receiveAllOrders = (orders) => {
  debugger
  return {
    type: RECEIVE_ALL_ORDERS,
    orders: orders.orders
  }
}

export const createOrder = () => {
  return (dispatch) => {
    return APIUtil.createOrder().then((order) => {
      return dispatch(receiveOrder(order));
    });
  };
}

export const fetchOrder = (id) => {
  return (dispatch) => {
    return APIUtil.fetchOrder(id).then((order) => {
      return dispatch(receiveOrder(order));
    });
  };
}

export const fetchAllOrders = () => {
  debugger
  return (dispatch) => {
    return APIUtil.fetchAllOrders().then((orders) => {
      debugger
      return dispatch(receiveAllOrders(orders))
    })
  }
}
