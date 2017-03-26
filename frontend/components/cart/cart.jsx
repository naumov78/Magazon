import React from 'react';
import { withRouter, Link } from 'react-router';



class Cart extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: [], total: 0 }
  this.total = 0;
  }

  componentWillMount() {
    this.props.fetchCart(this.props.currentUser.cart_id).then((result) => {
      debugger
      this.setState({ products: result.cart })
      this.updateTotal()
      this.setState({ total: this.total })
    })
  }


  updateTotal() {
    debugger
    for (let i = 0; i < this.state.products.length; i++) {
      const product = this.state.products[i]
      const productTotal = product.price * product.quantaty
      this.total += productTotal;
      debugger
    }
  }

  getProductTotal(price, quantaty) {
    return Math.round(quantaty * price * 100) / 100
  }

  getProductsList() {
    if (!this.props.currentUser) { return null }
    const products = this.state.products
    return (
      <ul className="cart-table">
        <li>
          <table className="single-product-in-cart">
            <tbody>
              <tr>
                <td className="cart-product-title product-title-header">Product</td>
                <td className="cart-product-price">Price</td>
                <td className="cart-product-quantaty cart-header">Quantaty</td>
                <td className="cart-product-total cart-header">Total</td>
              </tr>
            </tbody>
          </table>
        </li>
        {products.map((product, i) => {
          if (product.quantaty > 0) {
          return (
            <li key={i} className="cart-product-line">
              <table className="single-product-in-cart">
                <tbody>
                  <tr className="cart-product">
                    <td>
                      <div className="cart-product-title">
                        <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                          {product.title}
                        </Link>
                      </div>
                      <div className="product-cart-descr">
                        {product.brief_description}
                      </div>
                    </td>
                    <td className="cart-product-price">
                      ${product.price}
                    </td>
                    <td className="cart-product-quantaty">
                      {product.quantaty}
                    </td>
                    <td className="cart-product-total">
                      ${this.getProductTotal(product.price, product.quantaty)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4" >
                      <div className="cart-product-buttons">
                        <span id="remove-btn"><button onClick={() => this.removeFromCart(product.id, product.price)}>Remove item</button></span>
                        <span id="add-btn"><button onClick={() => this.addToCart(product.id, product.price)}>Add item</button></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          )
        }})}
      </ul>
    )
  }

  removeFromCart(id, price) {
    this.total -= price;
    this.props.removeFromCartFromCart(this.props.currentUser.cart_id, id).then((result) => {
        this.setState({ products: result.cart })
      })
  }

  addToCart(id, price) {
    this.total += Number(price);
    this.props.addProductFromCart(id).then((result) => {
        this.setState({ products: result.cart })
      })
  }

  emptyCart(cart_id) {
    this.total = 0
    this.props.emptyCart(cart_id).then((result) => {
        this.setState({ products: result.cart, total: 0 })
      })
  }

  render() {
    debugger
    if (this.total > 0) {
    return (
      <div className="cart-container">
      <h2>Cart page</h2>
        <div className="cart-product-list">{this.getProductsList()}</div>
        <div className="total-cart-amount">
          <span className="order-total-title">Total order amount:</span>
          <span className="order-total-amount">${Math.round(this.total * 100) / 100}</span>
        </div>
        <div className="cart-buttons">
          <span><button onClick={() => this.emptyCart(this.props.currentUser.cart_id)}>Empty Cart</button></span>
          <span><button>Checkout</button></span>
        </div>
      </div>
    )
  } else {
    return (
      <div className="cart-container">
      <h2>Cart page</h2>
        <div className="cart-product-list">You cart is empty!</div>
      </div>
    )
  }
  }


}


export default withRouter(Cart)
