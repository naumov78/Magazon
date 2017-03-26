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
      statusButton = <div>
        <span><button onClick={this.logout}>Logout</button></span>
        <span><Link to={`/users/${this.props.currentUser.cart_id}/cart`}><button>Cart</button></Link></span>
      </div>
    } else {
      statusButton=<Link to={`/signin`}><button>Sign In</button></Link>;
    }
    return (
      <div>
        <span>{statusButton}</span>
      </div>
    );
  }
}

export default withRouter(SessionStatus);
