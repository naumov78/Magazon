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
          return (
            <li key={`${i}`} className="cart-product-line">
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
                      {product.price}
                    </td>
                    <td className="cart-product-quantaty">
                      {product.quantaty}
                    </td>
                    <td className="cart-product-total">
                      {this.getProductTotal(product.price, product.quantaty)}
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
        })}
      </ul>
    )
  }

  removeFromCart(id, price) {
    this.total -= price;
    this.props.removeFromCart(id).then(() => {
      this.props.fetchCartAfterQuantatyChange(this.props.currentUser.cart_id).then((result) => {
        this.setState({ products: result.cart })
      })
    })
  }

  addToCart(id, price) {
    debugger
    this.total += Number(price);
    this.props.addToCart(id).then(() => {
      this.props.fetchCartAfterQuantatyChange(this.props.currentUser.cart_id).then((result) => {
        this.setState({ products: result.cart })
      })
    })
  }

  render() {
    debugger
    return (
      <div className="cart-title">
      <h2>Cart page</h2>
        <div className="cart-product-list">{this.getProductsList()}</div>
        <div>
          <span className="order-total-title">Total order amount:</span>
          <span className="order-total-amount">{Math.round(this.total * 100) / 100}</span>
        </div>
      </div>
    )
  }


}


export default withRouter(Cart)
