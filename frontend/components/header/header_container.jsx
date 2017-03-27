import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { fetchCart } from '../../actions/cart_actions';
// import { fetchProduct, fetchProductFromCategory } from '../../actions/product_actions';
// import { addToCart } from '../../actions/cart_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    cart: state.cart
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCart: (cart_id) => dispatch(fetchCart(cart_id)),
    // fetchProduct: (id) => dispatch(fetchProduct(id)),
    // fetchProductFromCategory: (category_id, product_id) => dispatch(fetchProductFromCategory(category_id, product_id)),
    // addToCart: (product_id) => dispatch(addToCart(product_id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
