import React from 'react';
import { connect } from 'react-redux';
import ExistingPayment from './ExistingPayment';
import { updatePayment } from '../../actions/payments.actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    updatePayment: (payment, payment_id) => dispatch(updatePayment(payment, payment_id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExistingPayment);
