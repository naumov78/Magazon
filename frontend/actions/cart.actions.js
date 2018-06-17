import * as APIUtilCart from '../api/cart.api';
import * as APIUtil from '../api/cartProducts.api';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CART = "RECEIVE_CART";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart: cart.products
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const addToCart = (product_id, quantity) => {
  return (dispatch) => {
    return APIUtil.addToCart(product_id, quantity).then((cart) => {
      return dispatch(receiveCart(cart));
    },
    ({ responseJSON }) => {
      return dispatch(receiveErrors(responseJSON));
    });
  }
}

export const updateCartProduct = (product_id, quantity) => {
  return (dispatch) => {
    return APIUtil.updateCartProduct(product_id, quantity).then((cart) => {
      return dispatch(receiveCart(cart));
    },
    ({ responseJSON }) => {
      return dispatch(receiveErrors(responseJSON));
    });
  }
}

export const removeFromCart = (product_id, quantity) => {
  return (dispatch) => {
    return APIUtil.removeFromCart(product_id, quantity).then((cart) => {
      return dispatch(receiveCart(cart));
    },
    ({ responseJSON }) => {
      return dispatch(receiveErrors(responseJSON));
    });
  }
}

export const fetchCart = (cart_id) => {
  return (dispatch) => {
    return APIUtilCart.fetchCart(cart_id).then((cart) => {
      return dispatch(receiveCart(cart));
    });
  }
}

export const emptyCart = (cart_id) => {
  return (dispatch) => {
    return APIUtilCart.emptyCart(cart_id).then((cart) => {
      return dispatch(receiveCart(cart));
    });
  }
}
