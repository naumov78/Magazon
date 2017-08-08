import React from 'react';
import { withRouter, Link } from 'react-router';



class Payment extends React.Component {

  constructor(props) {
  super(props);
  this.state = { user_id: null, network_id: null, cardholder: this.getCardHolderName(), card_number: "", expires: null, cvv: "" }
  }

  update(field) {
    return(e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  getCardHolderName() {
    return this.props.currentUser.first_name + " " + this.props.currentUser.last_name
  }

  selectNetwork(field) {
    return(e) => this.setState({
      [field]: parseInt(e.currentTarget.value)
    });
  }

  getNetworksList() {
    return (
      <select name="networks" onChange={this.selectNetwork("network_id")}>
        { this.props.currentUser.networks.map((network, i) => {
          return (<option key={i} value={network.id}>{network.network}</option>);
        })}
      </select>
    )
  }

  getExpirationDateProperFormat() {
    const formDate = this.state.expires.split("/");
    if (formDate.length === 2) {
      const month = formDate[0];
      const year =  formDate[1];
      return new Date('20' + year, month - 1, 1);
    } else {
      return new Date(this.state.expires);
    }
  }


  createPayment(e) {
    e.preventDefault();
    const payment = {
      user_id: this.props.currentUser.id,
      network_id: this.state.network_id,
      cardholder: this.state.cardholder,
      card_number: this.state.card_number,
      expires: this.getExpirationDateProperFormat(),
      cvv: Number(this.state.cvv)
    }
    this.props.createPayment(payment)
  }


  render() {
    return (
      <div className="address-payment-form-container">
        <form className="address-payment-form" onSubmit={(e) => this.createPayment(e)}>
          <div className="payment-form-fields">
            <div className="payment-field">
              <label>Card type</label>
              {this.getNetworksList()}
            </div>

            <div className="payment-field">
              <label>Cardholder Name</label>
              <input type="text" onChange={this.update("cardholder")} value={this.state.cardholder}/>
            </div>

            <div className="payment-field">
              <label>Card Number</label>
              <input type="text" onChange={this.update("card_number")} />
            </div>

            <div className="payment-field">
              <label>Expiration Date</label>
              <input type="text" onChange={this.update("expires")} />
            </div>

            <div className="payment-field">
              <label>CVC code</label>
              <input type="text" onChange={this.update("cvv")} />
            </div>

            <div>
              <input id="update-address" type="submit" value="Add card" />
            </div>
            <div className="cc-warning">
              Please, DO NOT enter real credit card details!<br />
            Magazon IS NOT a real store.
            </div>
          </div>
        </form>
      </div>
    )
  }

}



export default withRouter(Payment)
