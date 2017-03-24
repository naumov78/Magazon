import * as APIUtil from '../util/cart_api_util';


export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const addToCart = (product_id) => {
  return (dispatch) => {
    return APIUtil.addToCart(product_id).then((user) => {
      return dispatch(receiveUser(user));
    },
    ({ responseJSON }) => {
      return dispatch(receiveErrors(responseJSON));
    }
    )
  }
}

export const removeFromCart = (product_id) => {
  return (dispatch) => {
    return APIUtil.removeFromCart(product_id).then((user) => {
      return dispatch(receiveUser(user));
    },
    ({ responseJSON }) => {
      return dispatch(receiveErrors(responseJSON));
    }
    )
  }
}
