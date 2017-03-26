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
      <div className="product-container">
        <div className="product-info">
          <div className="product-product-title">{this.state.title}</div>
          <div className="product-product-descr">{this.state.full_description}</div>
          <div className="product-product-price">Price: ${this.state.price}</div>
        </div>
        <div className="product-order">
          <span className="addToCart-button"><button onClick={() => this.addToCart(this.state.id)}>Add to cart</button></span>
          <span className="check-card"><Link to={`/users/${this.props.currentUser.id}/cart`}><button>Cart</button></Link></span>
        </div>
      </div>
    );
  }


}


export default withRouter(Product);
