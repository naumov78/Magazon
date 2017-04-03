import React from 'react';
import { withRouter, Link } from 'react-router';



class Cart extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: [] }
  }

  componentWillMount() {
    this.props.fetchCart(this.props.currentUser.cart_id).then((result) => {
      this.setState({ products: result.cart })
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
                      {product.quantity}
                    </td>
                    <td className="cart-product-total">
                      ${product.total_price.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4" >
                      <div className="cart-product-buttons">
                        <span id="remove-btn"><button onClick={() => this.removeFromCart(product.product.id, -1)}>Remove item</button></span>
                        <span id="add-btn"><button onClick={() => this.addToCart(product.product.id, 1)}>Add item</button></span>
                      </div>
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
        this.setState({ products: result.cart })
      })
  }

  addToCart(id, quantity) {
    this.props.updateCartProduct(id, quantity).then((result) => {
        this.setState({ products: result.cart })
      })
  }

  emptyCart(cart_id) {
    this.props.emptyCart(cart_id).then((result) => {
        this.setState({ products: result.cart })
      })
  }

  render() {
    if (this.getTotal() > 0) {
    return (
      <div className="cart-container">
      <h2>Your Cart</h2>
        <div className="cart-product-list">{this.getProductsList()}</div>
        <div className="total-cart-amount">
          <span className="order-total-title">Total order amount:</span>
          <span className="order-total-amount">${this.getTotal().toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span>
        </div>
        <div className="cart-buttons">
          <span><button onClick={() => this.emptyCart(this.props.currentUser.cart_id)}>Empty Cart</button></span>
          <span><Link to={'/place_order'}><button>Checkout</button></Link></span>
        </div>
      </div>
    )
  } else {
    return (
      <div className="cart-container">
      <h2>Your Cart</h2>
        <div className="cart-product-list">You cart is empty!</div>
      </div>
    )
  }
  }


}


export default withRouter(Cart);
