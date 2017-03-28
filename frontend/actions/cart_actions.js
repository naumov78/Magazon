import * as APIUtilCart from '../util/cart_api_util';
import * as APIUtil from '../util/cart_products_api_util';


export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CART = "RECEIVE_CART";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const receiveCart = (cart) => {
  debugger
  return {
    type: RECEIVE_CART,
    cart: cart.products
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const addToCart = (product_id, quantity) => {
  return (dispatch) => {
    return APIUtil.addToCart(product_id, quantity).then((cart) => {
      return dispatch(receiveCart(cart));
    },
    ({ responseJSON }) => {
      return dispatch(receiveErrors(responseJSON));
    }
    )
  }
}

export const updateCartProduct = (product_id, quantity) => {
  return (dispatch) => {
    return APIUtil.updateCartProduct(product_id, quantity).then((cart) => {
      return dispatch(receiveCart(cart));
    },
    ({ responseJSON }) => {
      return dispatch(receiveErrors(responseJSON));
    }
    )
  }
}

export const removeFromCart = (product_id, quantity) => {
  return (dispatch) => {
    return APIUtil.removeFromCart(product_id, quantity).then((cart) => {
      return dispatch(receiveCart(cart));
    },
    ({ responseJSON }) => {
      return dispatch(receiveErrors(responseJSON));
    }
    )
  }
}


export const fetchCart = (cart_id) => {
  return (dispatch) => {
    return APIUtilCart.fetchCart(cart_id).then((cart) => {
      return dispatch(receiveCart(cart));
    })
  }
}


// export const addProductFromCart = (product_id) => {
//   return (dispatch) => {
//     return APIUtilCart.addProductFromCart(product_id).then((cart) => {
//       return dispatch(receiveCart(cart));
//     })
//   }
// }
//
//
// export const removeFromCartFromCart = (cart_id, product_id) => {
//   return (dispatch) => {
//     return APIUtilCart.removeFromCartFromCart(cart_id, product_id).then((cart) => {
//       return dispatch(receiveCart(cart));
//     })
//   }
// }


export const emptyCart = (cart_id) => {
  return (dispatch) => {
    return APIUtilCart.emptyCart(cart_id).then((cart) => {
      debugger
      return dispatch(receiveCart(cart));
    })
  }
}
