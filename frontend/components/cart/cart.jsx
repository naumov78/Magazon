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
        {products.map((product, i) => {
          return (
            <li key={`${i}`}>
              <div className="cart-product">
              <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                This product: {product.title} is in your cart
              </Link>
              <p>------------</p>
                {product.full_description}
                {product.price}
                  <div>
                    <button onClick={(e) => this.removeFromCart(e, product.id)} >Remove from Cart</button>
                  </div>
                </div>
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
