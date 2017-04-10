import React from 'react';
import { withRouter, Link } from 'react-router';


class Storefront extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  componentDidMount() {
    this.props.getStorefront().then((result) => {
      this.setState({ products: result.storefront })
    })
  }

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
    if (this.props.params.id !== nextProps.params.id) {
      this.props.getStorefront().then((result) => {
        this.setState({ products: result.storefront })
      })
    }
  }


  getInternalProductsList() {
    const products = this.state.products
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

  getExternalProductsList() {
    const products = this.state.products.slice(0, 6)
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
    if (this.state.products && this.props.location.pathname === "/") {
      return (
        <div className="storefront-container">{this.getExternalProductsList()}</div>
      );
    } else if (this.state.products && this.props.location.pathname !== "/") {
      return (
        <div>{this.getInternalProductsList()}</div>
      );
    } else {
      return <div></div>;
    }
  }

}

export default withRouter(Storefront);
