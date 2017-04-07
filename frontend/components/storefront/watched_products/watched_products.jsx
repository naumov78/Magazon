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
    // debugger
    this.props.getWatchedProducts().then((result) => {
      debugger
      this.setState({ products: result.watchedProducts })
    })
  }

  updateDescrLength(str) {
    if (str && str.length > 200) {
      return str.slice(0, 197) + "..."
    }
    return str;
  }

  getInternalProductsList() {
    const products = this.state.products.slice(1)
    debugger
    if (products.length > 1) {
    return (
      <div>
        <p>Your recently watched items</p>
        <ul className="bought-together-list">
          {products.map((product, i) => {
            return (
              <li key={i} className="single-product-block">
                <div className="bought-together">
                  <div className="bt-product">
                    <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                      <span className="product-img"><img src={product.product_pictures[0].image_url} /></span>
                      <span>{product.title}</span>
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
      </div>
    )
  } else {
    return null;
  }
  }


  getExternalProductsList() {
    const products = this.state.products.slice(0, 5)
    debugger
    if (products.length > 4) {
    return (
      <div>
          <ul className="storefront-list">
            {products.map((product, i) => {
              return (
                <li key={i} className="product-block">
                  <div className="frontstore-product watched-products">
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
      </div>
    )
  } else {
    return null;
  }
  }

//

  render() {
    debugger
    if (this.state.products && this.props.location.pathname === "/") {
      return (
        <div>
          {this.getExternalProductsList()}
        </div>
      );
    } else if (this.state.products && this.props.location.pathname !== "/") {
      return (
        <div className="product-watched-products-container">
          {this.getInternalProductsList()}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}

export default withRouter(WatchedProducts);












// <div className="product-descr">
//   {this.updateDescrLength(product.brief_description)}
// </div>
// <div className="product-price">
//   Price: ${product.price}
// </div>
// <div className="addToCart-button">
//   <button onClick={() => this.props.addToCart(product.id, 1)}>Add to cart</button>
// </div>
