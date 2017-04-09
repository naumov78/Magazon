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
    this.props.processForm(user).then(() => {
      //let id = this.props.currentUser.id;
      this.props.router.push('/');
    });
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderSignUpErrors(){
    if (this.props.errors){

    return(
      <ul className="signup-errors">
        {this.props.errors.map((error, i) => (
          <li className="errors-li" key={`${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (this.props.errors !== prevProps.errors){
  //     this.renderSignUpErrors();
  //   }
  // }

  render() {

    const link = (this.props.formType === 'signup' ? 'signin' : 'signup');
    debugger
    if (this.props.formType === 'signup'){
    return (
      <section className='signup-container'>
        <img src={ window.asset.logo } className="signup-logo"/>
          <div >
            { this.renderSignUpErrors() }
          </div>
      <div className="signup-form">
          <h1 className="signup-header">Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
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
              <input type="submit" className="signup-submit" value="Create Your Magazon Account" />

            </form>

              <div className="signup-divider">
                <h5>
                  {`Already have an account?`}
                </h5>
              </div>
              <Link to={`/${link}`}>
                <button className="signup-submit signin-submit">
                  Sign In
                </button>
              </Link>
        </div>
    </section>
    );
  } else {
    debugger
    return (
      <section className='signup-container'>
        <img src={ window.asset.logo } className="signup-logo"/>
          <div >
            { this.renderSignUpErrors() }
          </div>
          <div className="signup-form signin-form">
              <h1 className="signup-header">Sign In</h1>
                <form onSubmit={this.handleSubmit}>
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
                  <input type="submit" className="signup-submit" value="Sign In" />

                </form>

                  <div className="signup-divider">
                    <h5>
                      {`Don't have an account?`}
                    </h5>
                  </div>
                  <Link to={`/${link}`}>
                    <button className="signup-submit signin-submit">
                      Create Your Magazon Account
                    </button>
                  </Link>

            </div>
      </section>
    );
  }
  }
}

export default SessionForm;

// <button onClick={this.handleSubmit} className="signup-submit">
//   Create Your Magazon Account
// </button>

// <button onClick={this.handleSubmit} className="signup-submit">
//   Sign In
// </button>
