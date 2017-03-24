import React from 'react';
import { Link, withRouter } from 'react-router';

class User extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    debugger
    return (
      <section>
        <span><h1>Hello, {this.props.user.first_name} {this.props.user.last_name}!</h1></span>
        <span><Link to={`/users/${this.props.user.id}/cart`}>Cart</Link></span>
      </section>
    );
  }
}

export default withRouter(User);
