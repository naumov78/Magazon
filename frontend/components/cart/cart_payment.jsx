import React from 'react';
import { withRouter, Link } from 'react-router';
import PaymentContainer from '../payment/payment_container';


class CartPayment extends React.Component {

  constructor(props) {
  super(props);
  }


  render() {
    if (this.props.currentUser) {
      if (this.props.currentUser.payment_id) {
        return (
          <div>
            Excisting card information
          </div>
        )
      } else {
        return <PaymentContainer />
      }
    } else {
      return null;
    }

  }

}

export default withRouter(CartPayment);
