import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <section>
        <form>
          <input type="text"
            value={this.state.username}
            placeholder="Username"/>
        </form>
      </section>
    );
  }
}

export default SessionForm;
