import React from 'react';
import ShippingPrice from './shipping_price';
import ShipTo from './ship_to';
import SmallBanner from '../storefront/small_banner';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: this.props.product }
  }

  addToCart(id, quantity) {
    this.props.addToCart(id, quantity)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ product: nextProps.product })
  }

  getShipTo() {
    if (this.props.currentUser) {
      return <ShipTo currentUser={this.props.currentUser} />
    } else {
      return null;
    }
  }

  render () {
    if (this.props.product) {
      return (
        <div className="order-banner-container">
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
                <button id="add-to-cart" onClick={() => this.addToCart(this.state.product.id, 1)}>
                  <span className="cart-icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                  <span className="button-text">Add to Cart</span>
                </button>
              </div>
            </div>

            {this.getShipTo()}
          </div>

          <div className="product-banner">

            <SmallBanner smallBanners={this.props.smallBanners} />

          </div>
        </div>
      );
    } else {
      return (
        <div className="loading-page">
          <div>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </div>
        </div>
      );
    }
  }

}

export default AddToCart;
