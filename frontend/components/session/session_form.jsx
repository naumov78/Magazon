import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => {
      this.props.router.push("/");
    });
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderSignUpErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <section>
        <form>
          <input type="text"
            onChange={this.handleChange("first_name")}
            value={this.state.first_name}
            placeholder="First Name"/><br />
          <input type="text"
            onChange={this.handleChange("last_name")}
            value={this.state.last_name}
            placeholder="Last Name"/><br />
          <input type="text"
            onChange={this.handleChange("email")}
            value={this.state.email}
            placeholder="Email"></input><br />
          <input type="password"
            onChange={this.handleChange("password")}
            value={this.state.password}
            placeholder="password"/><br />
        </form>
        <button onClick={this.handleSubmit}>Sign Up</button>
        <div>
          { this.renderSignUpErrors() }
        </div>
    </section>
    );
  }
}

export default SessionForm;
