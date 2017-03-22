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
      qMark: '?',
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
      <ul className="signup-errors">
        {this.props.errors.map((error, i) => (
          <li className="errors-li" key={`${i}`}>
            *{error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <section className='signup-container'>
        <img src={ window.asset.logo } className="signup-logo"/>
          <div >
            { this.renderSignUpErrors() }
          </div>
      <div className="signup-form">
          <h1 className="signup-header">Sign Up</h1>
            <form>
            <label className="form-labels">First Name</label>
              <input type="text"
                onChange={this.handleChange("first_name")}
                value={this.state.first_name}
                className="form-inputs"/><br />
              <label className="form-labels">Last Name</label>
              <input type="text"
                onChange={this.handleChange("last_name")}
                value={this.state.last_name}
                className="form-inputs"/><br />
              <label className="form-labels">Email</label>
              <input type="text"
                onChange={this.handleChange("email")}
                value={this.state.email}
                className="form-inputs"></input><br />
              <label className="form-labels">Password</label>
              <input type="password"
                onChange={this.handleChange("password")}
                value={this.state.password}
                className="form-inputs"/><br />
            </form>
            <button onClick={this.handleSubmit} className="signup-submit">
              Create Your Magazon Account
            </button>
              <div className="signup-divider">
                <h5>
                  Already have an account{this.state.qMark}
                </h5>
              </div>
              <button className="signup-submit signin-submit">
                Sign In
              </button>

        </div>
    </section>
    );
  }
}

export default SessionForm;
