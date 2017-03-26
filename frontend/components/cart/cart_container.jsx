import React from 'react';
import { connect } from 'react-redux';
import Cart from './cart';
import { addToCart, removeFromCart, fetchCart, fetchCartAfterQuantatyChange} from '../../actions/cart_actions';


const mapStateToProps = (state) => {
  debugger
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addToCart: (product_id) => dispatch(addToCart(product_id)),
    removeFromCart: (product_id) => dispatch(removeFromCart(product_id)),
    fetchCart: (cart_id) => dispatch(fetchCart(cart_id)),
    fetchCartAfterQuantatyChange: (cart_id) => dispatch(fetchCartAfterQuantatyChange(cart_id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
