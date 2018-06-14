import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { addToCart, updateCartProduct, removeFromCart, fetchCart, emptyCart } from '../../actions/cart.actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addToCart: (product_id, quantity) => dispatch(addToCart(product_id, quantity)),
    updateCartProduct: (product_id, quantity) => dispatch(updateCartProduct(product_id, quantity)),
    removeFromCart: (product_id) => dispatch(removeFromCart(product_id)),
    fetchCart: (cart_id) => dispatch(fetchCart(cart_id)),
    addProductFromCart: (product_id) => dispatch(addProductFromCart(product_id)),
    removeFromCartFromCart: (cart_id, product_id) => dispatch(removeFromCartFromCart(cart_id, product_id)),
    emptyCart: (cart_id) => dispatch(emptyCart(cart_id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
