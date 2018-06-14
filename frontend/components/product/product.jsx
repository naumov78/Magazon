import React from 'react';
import { withRouter, Link } from 'react-router';
import BoughtTogether from './BoughtTogether';
import GetFiftyOff from './GetFiftyOff';
import ShippingPrice from './ShippingPrice';
import WatchedProductsContainer from '../storefront/watched_products/WatchedProducts.container';
import AddToCartContainer from './AddToCart.container';


class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = { product: {}, main_picture: null}
  }

  componentWillMount() {
    this.scrollToTop()
  }

  componentWillUnmount() {
    this.props.getWatchedProducts()
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id.toString() !== nextProps.params.id.toString()) {
      this.props.fetchProduct(Number(nextProps.params.id[0]), Number(nextProps.params.id[1])).then((result) => {
        this.setState({ product: result.product, main_picture: result.product.product_pictures[0] }, this.scrollToTop())
        this.props.getWatchedProducts()
      })
    }
  }

  componentDidMount() {
      this.props.fetchProduct(Number(this.props.params.id[0]), Number(this.props.params.id[1])).then((result) => {
        this.setState({ product: result.product, main_picture: result.product.product_pictures[0] })
      })
  }

  changeMainPicture(e, idx) {
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

  render() {
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

          <AddToCartContainer product={this.state.product} />

        </div>
        <div>

          <BoughtTogether product={this.state.product} />

        </div>

          <WatchedProductsContainer />

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

export default withRouter(Product);
