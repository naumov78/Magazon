import React from 'react';
import { connect } from 'react-redux';
import Order from './order';
import { fetchOrder } from '../../actions/order_actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    products: state.order
  });
}

const mapDispatchToProps = (dispatch) => {
  debugger
  return ({
    fetchOrder: (id) => dispatch(fetchOrder(id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
