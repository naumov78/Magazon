import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { fetchCart } from '../../actions/cart_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    cart: state.cart
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCart: (cart_id) => dispatch(fetchCart(cart_id)),
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
