import React from 'react';
import { withRouter, Link } from 'react-router';
import WatchedProductsContainer from '../storefront/watched_products/WatchedProducts.container';


class Cart extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: [], empty: false }
  }

  componentWillMount() {
    this.props.fetchCart(this.props.currentUser.cart_id).then((result) => {
      if (result.cart.length === 0) {
        this.setState({ empty: true })
      } else {
        this.setState({ products: result.cart })
      }
    })
  }

  getTotal() {
    if (this.state.products.length === 0) {
      return null;
    } else {
      let total = 0;
      for(let i = 0; i < this.state.products.length; i++) {
        total += this.state.products[i].total_price
      }
      return total;
    }
  }

  getProductsList() {
    if (!this.props.currentUser) { return null }
    const products = this.state.products;
    return (
      <ul className="cart-table">
        <li>
          <table className="single-product-in-cart">
            <tbody>
              <tr>
                <td className="cart-product-title product-title-header">Product</td>
                <td className="cart-product-price">Price</td>
                <td className="cart-product-quantity cart-header">Quantity</td>
                <td className="cart-product-total cart-header">Total</td>
              </tr>
            </tbody>
          </table>
        </li>
        {products.map((product, i) => {

          return (
            <li key={i} className="cart-product-line">
              <table className="single-product-in-cart">
                <tbody>
                  <tr className="cart-product">
                    <td className="product-info-picture">
                      <div className="cart-product-image">
                        <Link to={`/categories/${product.product.category_id}/products/${product.product.id}`} >
                          <span className="cart-product-img"><img src={product.product_pictures[0].image_url} /></span>
                        </Link>
                      </div>
                      <div className="cart-product-title">
                        {product.product.title}
                      </div>
                      <div className="product-cart-descr">
                        {product.product.brief_description}
                      </div>
                    </td>
                    <td className="cart-product-price">
                      ${Number(product.product.price).toFixed(2)}
                    </td>
                    <td className="cart-product-quantity">
                      <span className="decrease">
                        <button onClick={() => this.removeFromCart(product.product.id, -1)}>
                          <i className="fa fa-minus" aria-hidden="true"></i>
                        </button>
                      </span>
                      <span>{product.quantity}</span>
                      <span className="increase">
                        <button onClick={() => this.addToCart(product.product.id, 1)}>
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      </span>
                    </td>
                    <td className="cart-product-total">
                      ${product.total_price.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          )
        })}
      </ul>
    )
  }

  removeFromCart(id, quantity) {
    this.props.updateCartProduct(id, quantity).then((result) => {
        if (result.cart.length === 0) {
          this.setState({ empty: true })
        } else {
          this.setState({ products: result.cart })
        }
      })
  }

  addToCart(id, quantity) {
    this.props.updateCartProduct(id, quantity).then((result) => {
        this.setState({ products: result.cart })
      })
  }

  emptyCart(cart_id) {
    this.props.emptyCart(cart_id).then((result) => {
      if (result.cart.length === 0) {
        this.setState({ empty: true })
      } else {
        this.setState({ products: result.cart })
      }
    })
  }

  getTaxAmount() {
    return ((this.getTotal()*0.08875).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
  }

  render() {
    if (!this.state.empty && this.state.products.length === 0) {
      return (
        <div className="loading-page">
          <div>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </div>
        </div>
      );
    } else if (this.state.empty) {
      return (
        <div>
          <div className="cart-container">
          <h2>Shopping Cart</h2>
            <div className="cart-product-list">Your Shopping Cart is empty.</div>
          </div>
          <div className="empty-cart"></div>
          <div className="cart-watched-products">
            <WatchedProductsContainer />
          </div>
      </div>
      );
    } else if (this.state.products.length > 0) {
      return (
          <div className="cart-container">
          <h2>Shopping Cart</h2>
            <div className="cart-product-list">{this.getProductsList()}</div>
            <div className="cart-totals">
              <div className="total-cart-amount">
                <div className="total-line">
                  <span className="order-total-title">Total before tax:</span>
                  <span className="order-total-amount">${this.getTotal().toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span>
                </div>
              </div>
              <div className="total-cart-amount">
                <div className="total-line">
                  <span className="order-total-title">Estimated tax to be collected:</span>
                  <span className="order-total-amount">${this.getTaxAmount()}</span>
                </div>
              </div>
              <div className="total-cart-amount">
                <div id="order-total" className="total-line">
                  <span className="order-total-title">Order total:</span>
                  <span className="order-total-amount">${(Number(this.getTotal()) + Number(this.getTaxAmount())).toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="cart-buttons">
              <span className="addToCart-button"><button onClick={() => this.emptyCart(this.props.currentUser.cart_id)}>Empty Cart</button></span>
              <span className="addToCart-button"><Link to={'/place_order'}><button>Checkout</button></Link></span>
            </div>
          </div>
        )
    }
  }

}


export default withRouter(Cart);
