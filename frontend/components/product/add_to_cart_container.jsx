import React from 'react';
import { connect } from 'react-redux';
import AddToCart from './add_to_cart';
import { addToCart } from '../../actions/cart_actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  })
}


const mapDispatchToProps = (dispatch) => {
  return ({
    addToCart: (product_id, quantity) => dispatch(addToCart(product_id, quantity))
  })
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);
