import React from 'react';
import { connect } from 'react-redux';
import Payment from './Payment';
import { createPayment } from '../../actions/payments.actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createPayment: (payment) => dispatch(createPayment(payment))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);
