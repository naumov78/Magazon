import React from 'react';
import { connect } from 'react-redux';
import Orders from './Orders';
import { fetchAllOrders } from '../../actions/order.actions';



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
