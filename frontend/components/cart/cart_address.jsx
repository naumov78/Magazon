import React from 'react';
import { withRouter, Link } from 'react-router';
import AddressContainer from '../address/address_container';
import ExistingAddressContainer from '../address/existing_address_container';


class CartAddress extends React.Component {

  constructor(props) {
  super(props);
  this.state = { showAddressForm: false }
  }

  toggleAddressForm() {
    this.setState({ showAddressForm: !this.state.showAddressForm })
  }

  render() {
    if (this.props.currentUser) {
      if (this.props.currentUser.address_id) {
        return (
          <div>
            <ExistingAddressContainer />
          </div>
        );
      } else {
        if (this.state.showAddressForm) {
          return <AddressContainer />
        } else {
          return (
            <div className="place-order-create-address">
              <span className="warning-sign"><i className="fa fa-exclamation-circle fa-lg" aria-hidden="true"></i></span>
              <span className="no-address-warning">We don't have your address on file yet.</span>
              <span className="get-address-form-btn addToCart-button"><button onClick={() => this.toggleAddressForm()}>Add</button></span>
            </div>
          )
        }
      }
    } else {
      return null;
    }

  }

}

export default withRouter(CartAddress);
