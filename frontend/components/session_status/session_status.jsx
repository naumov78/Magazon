import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionStatus extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.revealer = this.revealer.bind(this);
  }

  logout(){
    this.props.logout();
    this.props.router.push('/signin');
  }


  revealer(){
    let btn = document.getElementById("showButton");
    btn.className -= 'show-button';
    console.log(btn);
  }

  render(){
    let g = document.getElementById('greeting');
    let statusButton;
    if (this.props.loggedIn){
      statusButton = <button onClick={this.logout}>Logout</button>;
    }else {
      statusButton=<Link to={`/signin`}><button>Sign In</button></Link>;
    }
    return (
      <div>
        <span onMouseOver={this.revealer} className="greeting">Hello. Sign In</span>
        <p id="showButton" className="show-button">{ statusButton }</p>
      </div>
    );
  }
}

export default withRouter(SessionStatus);
