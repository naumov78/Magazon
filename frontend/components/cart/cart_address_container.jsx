import React from 'react';
import { connect } from 'react-redux';
import CartAddress from './cart_address';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartAddress);
