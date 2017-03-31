import React from 'react';
import { connect } from 'react-redux';
import PlaceOrder from './place_order';
import { fetchCart } from '../../actions/cart_actions';
import { createOrder } from '../../actions/order_actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCart: (cart_id) => dispatch(fetchCart(cart_id)),
    createOrder: () => dispatch(createOrder())
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceOrder);
