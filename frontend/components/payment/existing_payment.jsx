import React from 'react';
import { Link, withRouter } from 'react-router';


class ExistingPayment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.currentUser.id,
      network_id: this.props.currentUser.card_network.id,
      cardholder: this.props.currentUser.payment.cardholder,
      card_number: "",
      expires: null,
      cvv: "",
      edit: false }
      this.changeToEdit = this.changeToEdit.bind(this)
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
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

  changeToEdit() {
    this.setState({ edit: true })
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

  updatePayment(e) {
    e.preventDefault();
    const payment = {
      user_id: this.props.currentUser.id,
      network_id: this.state.network_id,
      cardholder: this.state.cardholder,
      card_number: this.state.card_number,
      expires: this.getExpirationDateProperFormat(),
      // expires: this.state.expires,
      cvv: Number(this.state.cvv)
    }
    this.props.updatePayment(payment, currentUser.payment_id).then(() => this.setState({ edit: false }));
  }


  render() {
    if (this.state.edit) {
      return (
        <div className="address-payment-form-container">
          <form className="address-payment-form" onSubmit={(e) => this.updatePayment(e)}>
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
                <input id="update-address" type="submit" value="Update card" />
              </div>
              <div className="cc-warning">
                Please, DO NOT enter real credit card details!<br />
              Magazon IS NOT a real store.
              </div>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className="">
          <table className="payment-table">
            <tbody>
              <tr>
                <td><span className="checkmark-sign"><i className="fa fa-check-circle fa-lg" aria-hidden="true"></i></span></td>
                <td id="place-order-num" className="placeorder-titles">2</td>
                <td id="place-order-title" className="placeorder-titles">Payment method</td>
                <td className="customer-info">
                  <div className="existing-payment">{`${this.props.currentUser.card_network.network} ending in ${this.props.currentUser.payment.card_number.slice(this.props.currentUser.payment.card_number.length - 4, this.props.currentUser.payment.card_number.length)}`}</div>
                </td>
                <td>
                  <span className="addToCart-button"><button onClick={this.changeToEdit}>Change</button></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }


}


export default withRouter(ExistingPayment);
