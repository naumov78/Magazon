import React from 'react';
import { withRouter, Link } from 'react-router';
import PaymentContainer from '../payment/payment_container';
import ExistingPaymentContainer from '../payment/existing_payment_container';


class CartPayment extends React.Component {

  constructor(props) {
  super(props);
  this.state = { showPaymentForm: false }
  }

  togglePaymentForm() {
    this.setState({ showPaymentForm: !this.state.showPaymentForm })
  }

  render() {
    if (this.props.currentUser) {
      if (this.props.currentUser.payment_id) {
        return (
          <div>
            <ExistingPaymentContainer />
          </div>
        )
      } else {
        if (this.state.showPaymentForm) {
          return <PaymentContainer />
        } else {
          return (
            <div className="place-order-create-address">
              <span className="warning-sign"><i className="fa fa-exclamation-circle fa-lg" aria-hidden="true"></i></span>
              <span className="no-address-warning">We don't have your payment method on file yet.</span>
              <span className="get-payment-form-btn addToCart-button"><button onClick={() => this.togglePaymentForm()}>Add</button></span>
            </div>
          )
        }
      }
    } else {
      return null;
    }

  }

}

export default withRouter(CartPayment);
