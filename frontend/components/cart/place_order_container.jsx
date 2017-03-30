import React from 'react';
import { connect } from 'react-redux';
import PlaceOrder from './place_order';
import { fetchCart } from '../../actions/cart_actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCart: (cart_id) => dispatch(fetchCart(cart_id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceOrder);
