import React from 'react';
import { Link, withRouter } from 'react-router';

class ExistingAddress extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser
    this.state = {
      user_id: currentUser.id,
      street: currentUser.address.street,
      street2: currentUser.address.street2,
      city: currentUser.address.city,
      state_id: currentUser.state.id,
      zip: currentUser.address.zip,
      edit: false }
    this.changeToEdit = this.changeToEdit.bind(this)
  }


  update(field) {
    return(e) => this.setState({
        [field]: e.currentTarget.value
      })
  }

  changeToEdit() {
    this.setState({ edit: true })
  }

  updateAddress(e) {
    e.preventDefault();
    const addressData = {
    user_id: this.state.user_id,
    street: this.state.street,
    street2: this.state.street2,
    city: this.state.city,
    state_id: this.state.state_id,
    zip: this.state.zip
    }
    this.props.updateAddress(addressData, this.props.currentUser.address_id).then(() => this.setState({ edit: false }));
  }

  selectState(field) {
    return(e) => this.setState({
      [field]: parseInt(e.currentTarget.value)
    });
  }

  getStateList() {
    return (
      <select name="states" onChange={this.selectState("state_id")}>
        { this.props.currentUser.states.map((state, i) => {
          return (<option key={i} value={state.id} >{state.state}</option>);
        })}
      </select>
    )
  }


  render() {
    debugger
    if (this.state.edit) {
      return (
        <div>
          <form onSubmit={(e) => this.updateAddress(e)}>
            <div>
              <label>Street</label>
              <input type="text" onChange={this.update("street")} value={this.state.street}/>
            </div>

            <div>
              <label>Street2</label>
              <input type="text" onChange={this.update("street2")} value={this.state.street2}/>
            </div>

            <div>
              <label>City</label>
              <input type="text" onChange={this.update("city")} value={this.state.city}/>
            </div>

            <div>
              <label>State</label>
              {this.getStateList()}
            </div>

            <div>
              <label>ZIP</label>
              <input type="text" onChange={this.update("zip")} value={this.state.zip}/>
            </div>

            <div>
              <input type="submit" value="Update address" />
            </div>

          </form>
        </div>
      )
    } else {
      return (
        <div>
          <table className="address-table">
            <tbody>
              <tr>
                <td id="place-order-num" className="placeorder-titles">1</td>
                <td id="place-order-title" className="placeorder-titles">Shipping address</td>
                <td className="customer-info">
                  <div>{`${this.props.currentUser.first_name}  ${this.props.currentUser.last_name}`}</div>
                  <div>{`${this.props.currentUser.address.street} ${this.props.currentUser.address.street2}`}</div>
                  <div>{`${this.props.currentUser.address.city}, ${this.props.currentUser.state.state}, ${this.props.currentUser.address.zip}`}</div>
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


export default withRouter(ExistingAddress);
