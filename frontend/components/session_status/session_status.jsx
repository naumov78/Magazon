import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionStatus extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.props.logout();
    this.props.router.push('/signin');

  }

  render(){
    let statusButton;
    if (this.props.loggedIn){
      statusButton = <button onClick={this.logout}>Logout</button>;
    }else {
      statusButton=<Link to={`/signin`}><button>Sign In</button></Link>;
    }
    return (
      <div>
        <p>{statusButton}</p>
      </div>
    );
  }
}

export default withRouter(SessionStatus);
