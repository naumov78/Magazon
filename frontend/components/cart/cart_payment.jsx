import React from 'react';
import { withRouter, Link } from 'react-router';
import PaymentContainer from '../payment/payment_container';
import ExistingPayment from '../payment/existing_payment';


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
            <ExistingPayment currentUser={this.props.currentUser} />
          </div>
        )
      } else {
        if (this.state.showPaymentForm) {
          return <PaymentContainer />
        } else {
          return (
            <div>
              We don't have your payment method on file yet.
              <button onClick={() => this.togglePaymentForm()}>Add Payment Method</button>
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
