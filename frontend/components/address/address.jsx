import React from 'react';
import { withRouter, Link } from 'react-router';



class Address extends React.Component {

  constructor(props) {
  super(props);
  this.state = { user_id: null, street: "", street2: "", city: "", state_id: null, zip: "" }
  }

  update(field) {
    return(e) => this.setState({
      [field]: e.currentTarget.value
    });
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
          return (<option key={i} value={state.id}>{state.state}</option>);
        })}
      </select>
    )
  }

  componentWillReceiveProps(nextProps) {
    debugger
  }

  createAddress(e) {
    e.preventDefault();
    const address = {
      user_id: this.props.currentUser.id,
      street: this.state.street,
      street2: this.state.street2,
      city: this.state.city,
      state_id: this.state.state_id,
      zip: Number(this.state.zip)
    }
    this.props.createAddress(address)
  }


  render() {
    return (
      <div>
        <form onSubmit={(e) => this.createAddress(e)}>
          <div>
            <label>Street</label>
            <input type="text" onChange={this.update("street")} />
          </div>

          <div>
            <label>Street2</label>
            <input type="text" onChange={this.update("street2")} />
          </div>

          <div>
            <label>City</label>
            <input type="text" onChange={this.update("city")} />
          </div>

          <div>
            <label>State</label>
            {this.getStateList()}
          </div>

          <div>
            <label>ZIP</label>
            <input type="text" onChange={this.update("zip")} />
          </div>

          <div>
            <input type="submit" value="Add address" />
          </div>

        </form>
      </div>
    )
  }



}



export default withRouter(Address)
