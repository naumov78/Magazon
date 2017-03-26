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

  getProductTotal(price, quantaty) {
    return quantaty * price
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
                <td className="cart-product-quantaty">Quantaty</td>
                <td className="cart-product-total">Total</td>
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
                    <td className="cart-product-title">
                      <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                        This product: {product.title} is in your cart
                      </Link>
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
                    <td colSpan="4">
                      <div>
                        <button onClick={() => this.removeFromCart(product.id)}>Remove from Cart</button>
                        <button onClick={() => this.addToCart(product.id)}>Add one more</button>
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

  removeFromCart(id) {
    this.props.removeFromCart(id).then(() => {
      this.props.fetchCart(this.props.currentUser.cart_id).then((result) => {
        this.setState({ products: result.cart })
      })
    })
  }

  addToCart(id) {
    this.props.addToCart(id).then(() => {
      this.props.fetchCart(this.props.currentUser.cart_id).then((result) => {
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
      </div>
    )
  }


}


export default withRouter(Cart)
