import React from 'react';
import { connect } from 'react-redux';
import Order from './order';
import { fetchOrder } from '../../actions/order_actions';
import { refreshCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    products: state.order
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchOrder: (id) => dispatch(fetchOrder(id)),
    refreshCurrentUser: () => dispatch(refreshCurrentUser())
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
