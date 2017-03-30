import React from 'react';
import { withRouter, Link } from 'react-router';



class Product extends React.Component {

  constructor(props) {
  super(props);
  this.state = {}
  }

  componentWillMount() {
    this.props.getWatchedProducts()
  }

  componentDidMount() {
      this.props.fetchProduct(Number(this.props.params.id[0]), Number(this.props.params.id[1])).then((result) => {
        this.setState(result.product)
      })
  }

  addToCart(id, quantity) {
    this.props.addToCart(id, quantity)
  }

  render() {
    return (
      <div className="product-container">
        <div className="product-info">
          <div className="product-product-title">{this.state.title}</div>
          <div className="product-product-descr">{this.state.full_description}</div>
          <div className="product-product-price">Price: ${this.state.price}</div>
        </div>
        <div className="product-order">
          <span className="addToCart-button"><button onClick={() => this.addToCart(this.state.id, 1)}>Add to cart</button></span>
          <span className="check-card"><Link to={`/users/${this.props.currentUser.id}/cart`}><button>Cart</button></Link></span>
        </div>
      </div>
    );
  }


}


export default withRouter(Product);
