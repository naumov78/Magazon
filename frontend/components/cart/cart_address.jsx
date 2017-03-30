import React from 'react';
import { withRouter, Link } from 'react-router';
import AddressContainer from '../address/address_container';


class CartAddress extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: [] }
  }


  render() {
    if (this.props.currentUser) {
      if (this.props.currentUser.address_id) {
        return (
          <div>
            Excisting address
          </div>
        )
      } else {
        return <AddressContainer />
      }
    } else {
      return null;
    }

  }

}

export default withRouter(CartAddress);
