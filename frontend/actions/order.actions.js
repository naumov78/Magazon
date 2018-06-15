import * as APIUtil from '../api/orders.api';

export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_ALL_ORDERS = "RECEIVE_ALL_ORDERS";

export const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  order_id: order.order_id,
  posted: order.posted,
  status: order.status,
  total_amount: order.total_amount,
  order: order.products
});

export const receiveAllOrders = ({orders}) => ({
  type: RECEIVE_ALL_ORDERS,
  orders
});

export const createOrder = () => {
  return (dispatch) => {
    return APIUtil.createOrder().then((order) => {
      return dispatch(receiveOrder(order));
    });
  }
}

export const fetchOrder = (id) => {
  return (dispatch) => {
    return APIUtil.fetchOrder(id).then((order) => {
      return dispatch(receiveOrder(order));
    });
  }
}

export const fetchAllOrders = () => {
  return (dispatch) => {
    return APIUtil.fetchAllOrders().then((orders) => {
      return dispatch(receiveAllOrders(orders))
    });
  }
}
