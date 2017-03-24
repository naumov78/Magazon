import React from 'react';
import { withRouter, Link } from 'react-router';



class Product extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: null }
  }

  componentDidMount() {
    if (this.props.location.pathname[1] === 'p') {
      this.props.fetchProduct(Number(this.props.params.id))
    } else {
      this.props.fetchProductFromCategory(Number(this.props.params.category_id), Number(this.props.params.id))
    }
  }


  render() {
    debugger
    return (
      <div>This is the product</div>
    );
  }


}


export default withRouter(Product);
