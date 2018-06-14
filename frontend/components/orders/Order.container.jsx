import React from 'react';
import { connect } from 'react-redux';
import Order from './Order';
import { fetchOrder } from '../../actions/order.actions';
import { refreshCurrentUser } from '../../actions/session.actions';

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
