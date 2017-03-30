import React from 'react';
import { withRouter, Link } from 'react-router';



class WatchedProducts extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: [] }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ products: nextProps.watchedProducts })
  }


  componentDidMount() {
    this.props.getWatchedProducts().then((result) => {
      this.setState({ products: result.watchedProducts })
    })
  }

  updateDescrLength(str) {
    if (str && str.length > 200) {
      return str.slice(0, 197) + "..."
    }
    return str;
  }

  getProductsList() {
    const products = this.state.products.slice(0, 5)
    debugger
    if (products.length > 4) {
    return (
      <ul className="storefront-list">
        {products.map((product, i) => {
          return (
            <li key={i} className="product-block">
              <div className="frontstore-product">
                <div>
                <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                  <span className="product-title">{product.title}</span>
                </Link>
                </div>
                <div className="product-descr">
                  {this.updateDescrLength(product.brief_description)}
                </div>
                <div className="product-price">
                  Price: ${product.price}
                </div>
                <div className="addToCart-button">
                  <button onClick={() => this.props.addToCart(product.id, 1)}>Add to cart</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    )
  } else {
    return null;
  }
  }

  render() {
    debugger
    if (this.state.products && this.props.location.pathname == "/") {
    return (
      <div className="watched-products-container">
        {this.getProductsList()}
      </div>
    );
    } else {
      return <div></div>;
    }
  }

}

export default withRouter(WatchedProducts);
