import React from 'react';
import { withRouter, Link } from 'react-router';



class StoreFront extends React.Component {

  constructor(props) {
  super(props);
  
  }

  componentWillMount() {
    debugger
  }

  componentDidMount() {
    debugger
    this.props.fetchAllCategories()
  }

  componentWillReceiveProps(newProps) {
    debugger
  }

  render() {
    debugger
    return (
      <div>It's working</div>
    )
  }

}

export default withRouter(StoreFront)
