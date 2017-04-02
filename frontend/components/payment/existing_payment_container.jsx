import React from 'react';
import { connect } from 'react-redux';
import ExistingPayment from './existing_payment';
import { updatePayment } from '../../actions/payments_actions';


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
