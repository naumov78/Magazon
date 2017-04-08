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

  updatePayment(e) {
    e.preventDefault();
    const payment = {
      user_id: this.props.currentUser.id,
      network_id: this.state.network_id,
      cardholder: this.state.cardholder,
      card_number: this.state.card_number,
      expires: this.state.expires,
      cvv: Number(this.state.cvv)
    }
    this.props.updatePayment(payment, currentUser.payment_id).then(() => this.setState({ edit: false }));
  }


  render() {
    if (this.state.edit) {
      return (
        <div>
          <form onSubmit={(e) => this.updatePayment(e)}>

            <div>
              <label>State</label>
              {this.getNetworksList()}
            </div>

            <div>
              <label>Cardholder Name</label>
              <input type="text" onChange={this.update("cardholder")} value={this.state.cardholder}/>
            </div>

            <div>
              <label>Card Number</label>
              <input type="text" onChange={this.update("card_number")} />
            </div>

            <div>
              <label>Expiration Date</label>
              <input type="text" onChange={this.update("expires")} />
            </div>

            <div>
              <label>CVV code</label>
              <input type="text" onChange={this.update("cvv")} />
            </div>

            <div>
              <input type="submit" value="Update card" />
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
                <td id="place-order-num" className="placeorder-titles">2</td>
                <td id="place-order-title" className="placeorder-titles">Payment method</td>
                <td className="customer-info">
                  <div>{`${this.props.currentUser.card_network.network} ending in ${this.props.currentUser.payment.card_number.slice(this.props.currentUser.payment.card_number.length - 4, this.props.currentUser.payment.card_number.length)}`}</div>
                </td>
                <td>
                  <button onClick={this.changeToEdit}>Change</button>
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
