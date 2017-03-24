import React from 'react';
import { withRouter, Link } from 'react-router';



class Cart extends React.Component {

  constructor(props) {
  super(props);
  }

  getProductsList() {
    if (!this.props.currentUser) { return null }
    const products = this.props.currentUser.cart
    return (
      <ul>
        {products.map((product, i) => {
          return (
            <li key={`${i}`}>
              <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                This product: {product.title} is in your cart
              </Link>
              <p>------------</p>
                {product.full_description}
                {product.price}
            </li>
          )
        })}
      </ul>
    )
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
