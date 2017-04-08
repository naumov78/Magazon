import React from 'react';
import { withRouter, Link } from 'react-router';
import BoughtTogether from './bought_together';
import GetFiftyOff from './get_fifty_off';
import ShippingPrice from './shipping_price';
import WatchedProductsContainer from '../storefront/watched_products/watched_products_container';
import ShipTo from './ship_to';

class Product extends React.Component {

  constructor(props) {
  super(props);
  this.state = { product: {}, main_picture: null}
  }

  componentWillUnmount() {
    this.props.getWatchedProducts()
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (this.props.params.id.toString() !== nextProps.params.id.toString()) {
      debugger
      this.props.fetchProduct(Number(nextProps.params.id[0]), Number(nextProps.params.id[1])).then((result) => {
        this.setState({ product: result.product, main_picture: result.product.product_pictures[0] }, this.scrollToTop())
        this.props.getWatchedProducts()
      })
    }
  }

  componentDidMount() {
    debugger
      this.props.fetchProduct(Number(this.props.params.id[0]), Number(this.props.params.id[1])).then((result) => {
        this.setState({ product: result.product, main_picture: result.product.product_pictures[0] })
      })
  }

  addToCart(id, quantity) {
    debugger
    this.props.addToCart(id, quantity)
  }

  changeMainPicture(e, idx) {
    debugger
    e.preventDefault();
    this.setState({ main_picture: this.state.product.product_pictures[idx] })
  }

  getSmallImageClass(pic) {
    if (pic.image_url === this.state.main_picture.image_url) {
      return "small-main-image";
    } else {
      return "alt-product-image";
    }
  }

  getShipTo() {
    if (this.props.currentUser) {
      return <ShipTo currentUser={this.props.currentUser} />
    } else {
      return null;
    }
  }

  render() {
    debugger
    if (this.state.product.title) {
    return (
      <div className="product-page">

        <div className="product-container">

          <div>
            <ul className="alt-images">
              {this.state.product.product_pictures.map((picture, i) => {
                return (
                  <li key={i} className={this.getSmallImageClass(picture)}>
                    <a onMouseOver={(e) => this.changeMainPicture(e, i)}>
                      <img src={picture.image_url} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="product-info-container">

            <div className="main-image">
              <img src={this.state.main_picture.image_url} />
            </div>

            <div className="product-info">

              <div className="product-product-title">{this.state.product.title}</div>

              <div className="product-product-price">
                <span className="price-title">Price: </span>
                <span className="price">${Number(this.state.product.price).toFixed(2)}</span>
                <ShippingPrice price={this.state.product.price} product={true} />
              </div>
                <GetFiftyOff price={this.state.product.price} />
              <div className="stock-product">
                In stock.
              </div>
              <div className="product-product-descr">{this.state.product.full_description}</div>
            </div>
          </div>

          <div className="order-container">

            <div className="order-price">
              <span className="price order-block-price">${Number(this.state.product.price).toFixed(2)}</span>
              <ShippingPrice price={this.state.product.price} order={true} />
            </div>

            <div className="stock-order">
              In stock.
            </div>

            <div className="product-order">
              <div className="addToCart-button">
                <button onClick={() => this.addToCart(this.state.product.id, 1)}>
                  <span className="cart-icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                  <span className="button-text">Add to Cart</span>
                </button>
              </div>
            </div>

            {this.getShipTo()}

          </div>

        </div>

        <div>
          <BoughtTogether product={this.state.product} />
        </div>

          <WatchedProductsContainer />

      </div>
    );
  } else {
    return null;
  }
}

}


export default withRouter(Product);
