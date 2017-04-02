import React from 'react';
import { withRouter, Link } from 'react-router';



class Product extends React.Component {

  constructor(props) {
  super(props);
  this.state = { product: {}, main_picture: null}
  }

  componentWillUnmount() {
    this.props.getWatchedProducts()
  }

  componentDidMount() {
      this.props.fetchProduct(Number(this.props.params.id[0]), Number(this.props.params.id[1])).then((result) => {
        this.setState({ product: result.product, main_picture: result.product.product_pictures[0] })
      })
  }

  addToCart(id, quantity) {
    this.props.addToCart(id, quantity)
  }

  changeMainPicture(e, idx) {
    debugger
    e.preventDefault();
    this.setState({ main_picture: this.state.product.product_pictures[idx] })
  }

  render() {
    debugger
    if (this.state.product.title) {
    return (
      <div className="product-container">
        <div>
          <ul>
            {this.state.product.product_pictures.map((picture, i) => {
              return (
                <li key={i}>
                  <a onClick={(e) => this.changeMainPicture(e, i)}>
                    <img width="40" height="40" src={picture.image_url} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div> <img width="522" height="522" src={this.state.main_picture.image_url} /> </div>
        <div className="product-info">

          <div className="product-product-title">{this.state.product.title}</div>
          <div className="product-product-descr">{this.state.product.full_description}</div>
          <div className="product-product-price">Price: ${this.state.product.price}</div>
        </div>
        <div className="product-order">
          <span className="addToCart-button"><button onClick={() => this.addToCart(this.state.product.id, 1)}>Add to cart</button></span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

}


export default withRouter(Product);
