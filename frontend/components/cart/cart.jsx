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


  getProductsList() {
    if (!this.props.currentUser) { return null }
    const products = this.state.products
    return (
      <ul>
        <li>
          <table>
            <tbody>
              <tr>
                <td>Product name</td>
                <td>Description</td>
                <td>Price</td>
                <td>quantaty</td>
                <td>Total</td>
              </tr>
            </tbody>
          </table>
        </li>
        {products.map((product, i) => {
          return (
            <li key={`${i}`}>
              <table>
                <tbody>
                  <tr className="cart-product">
                    <td>
                      <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                        This product: {product.title} is in your cart
                      </Link>
                    </td>
                    <td>
                      {product.brief_description}
                    </td>
                    <td>
                      {product.price}
                    </td>
                    <td>
                      {product.quantaty}
                    </td>
                    <td>
                      total
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
      <div>
      ho-ho-ho
      {this.getProductsList()}
      </div>
    )
  }


}


export default withRouter(Cart)
