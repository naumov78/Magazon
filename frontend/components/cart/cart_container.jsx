import React from 'react';
import { connect } from 'react-redux';
import Cart from './cart';
import { addToCart, removeFromCart } from '../../actions/cart_actions';


const mapStateToProps = (state) => {
  debugger
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addToCart: (product_id) => dispatch(addToCart(product_id)),
    removeFromCart: (product_id) => dispatch(removeFromCart(product_id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
