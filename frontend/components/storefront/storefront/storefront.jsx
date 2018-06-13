import React from 'react';
import { withRouter, Link } from 'react-router';


class Storefront extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [] }
    // the number of product images to be displayed in storefront on index page
    this.storefrontProductNumber = 6;
  }

  componentDidMount() {
    this.props.getStorefront();
  }

  // TODO: use ellipsis
  updateTitleLength(str) {
    if (str && str.length > 35) {
      str = str.slice(0, 32)
      if (str[str.length - 1] === " ") {
        str = str.slice(0, 31);
        return str + "...";
      } else {
        return str + "...";
      }
    }
    return str;
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.products !== nextProps.storefront.products) {
      this.setState({ products: nextProps.storefront.products });
    }
    if (this.props.params.id !== nextProps.params.id) {
      this.props.getStorefront();
    }
  }

  /**
  * Display product cards on both sides of internal page
  */
  getInternalProductsList() {
    const {products} = this.state;
    return (
      <ul className="internal-storefront-list">
        <p>Sponsored</p>
        {products.map((product, i) => {
          return (
            <li key={i} className="internal-product-block">
              <div className="prod-details">
                <div className="storefront-product">
                  <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                    <div className="internal-product-img"><img src={product.product_pictures[0].image_url} /></div>
                    <div className="prod-title">{this.updateTitleLength(product.title)}</div>
                  </Link>
                </div>
                <div>
                  <span className="bought-together-price">${Number(product.price).toFixed(2)}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    )
  }

  /**
  * Display product images on index page ()
  */
  getExternalProductsList() {
    const products = this.state.products.slice(0, this.storefrontProductNumber);
    return (
      <ul className="storefront-list">
        {products.map((product, i) => {
          return (
            <li key={i} className="product-block">
              <div className="frontstore-product">
                <div>
                  <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                    <span className="product-img"><img src={product.product_pictures[0].image_url} /></span>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.state.products && this.props.indexPage && this.getExternalProductsList()}
        {this.state.products && !this.props.indexPage && this.getInternalProductsList()}
      </div>
    );
  }

}

export default withRouter(Storefront);
