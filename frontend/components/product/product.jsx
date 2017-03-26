import React from 'react';
import { withRouter, Link } from 'react-router';



class Product extends React.Component {

  constructor(props) {
  super(props);
  this.state = {}
  }

  componentDidMount() {
    if (this.props.location.pathname[1] === 'p') {
      this.props.fetchProduct(Number(this.props.params.id)).then((result) => {
        debugger
        this.setState(result.product)
      })
    } else {
      debugger
      this.props.fetchProductFromCategory(Number(this.props.params.id[0]), Number(this.props.params.id[1])).then((result) => {
        this.setState(result.product)
      })
    }
  }

  addToCart(id) {
    this.props.addToCart(id)
  }

  render() {
    debugger
    return (
      <div>
        <div className="product-info">
          <div>{this.state.title}</div>
          <div>{this.state.full_description}</div>
          <div>{this.state.price}</div>
        </div>
        <div className="product-order">
          <span><button onClick={() => this.addToCart(this.state.id)}>Add to cart</button></span>
          <span id="cart"><Link to={`/users/${this.props.currentUser.id}/cart`} >Check your cart</Link></span>
        </div>
      </div>
    );
  }


}


export default withRouter(Product);
