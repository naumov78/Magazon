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

  componentWillReceiveProps(nextProps) {
    debugger
  }

  createPayment(e) {
    e.preventDefault();
    const payment = {
      user_id: this.props.currentUser.id,
      network_id: this.state.network_id,
      cardholder: this.state.cardholder,
      card_number: this.state.card_number,
      expires: this.state.expires,
      cvv: Number(this.state.cvv)
    }
    this.props.createPayment(payment)
  }


  render() {
    return (
      <div>
        <form onSubmit={(e) => this.createPayment(e)}>

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
            <input type="submit" value="Add card" />
          </div>

        </form>
      </div>
    )
  }



}



export default withRouter(Payment)
