import React from 'react';
import { connect } from 'react-redux';
import Cart from './cart';
import { addToCart, updateCartProduct, removeFromCart, fetchCart, addProductFromCart, removeFromCartFromCart, emptyCart } from '../../actions/cart_actions';


const mapStateToProps = (state) => {
  debugger
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addToCart: (product_id, quantity) => dispatch(addToCart(product_id, quantity)),
    updateCartProduct: (product_id, quantity) => dispatch(updateCartProduct(product_id, quantity)),
    removeFromCart: (product_id) => dispatch(removeFromCart(product_id)),
    fetchCart: (cart_id) => dispatch(fetchCart(cart_id)),
    addProductFromCart: (product_id) => dispatch(addProductFromCart(product_id)),
    removeFromCartFromCart: (cart_id, product_id) => dispatch(removeFromCartFromCart(cart_id, product_id)),
    emptyCart: (cart_id) => dispatch(emptyCart(cart_id)),
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
