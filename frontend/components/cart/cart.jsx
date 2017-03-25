import React from 'react';
import { withRouter, Link } from 'react-router';



class Cart extends React.Component {

  constructor(props) {
  super(props);
  // this.state = { products: null }
  }

  getProductsList() {
    if (!this.props.currentUser) { return null }
    const products = this.props.currentUser.cart
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
                      quantaty
                    </td>
                    <td>
                      total
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      <div>
                        <button onClick={(e) => this.removeFromCart(e, product.id)} >Remove from Cart</button>
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

  removeFromCart(e, id) {
    e.preventDefault()
    this.props.removeFromCart(id)
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
