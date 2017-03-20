import React from 'react';

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
    this.props.signup(user);
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
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
      </section>
    );
  }
}

export default SessionForm;
