import React from 'react';
import { connect } from 'react-redux';
import Orders from './orders';
import { fetchAllOrders } from '../../actions/order_actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
}


const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllOrders: () => dispatch(fetchAllOrders())
  })
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
