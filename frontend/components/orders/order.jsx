import React from 'react';
import { withRouter, Link } from 'react-router';




class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  componentWillMount() {
    debugger
    this.props.fetchOrder(Number(this.props.params.id)).then((result) => {
      debugger
      this.setState({ products: result.order })
    })
  }

  componentDidMount() {
    debugger
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
                <td className="cart-product-quantity cart-header">Quantity</td>
                <td className="cart-product-total cart-header">Total</td>
              </tr>
            </tbody>
          </table>
        </li>
        {products.map((product, i) => {
          debugger
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
                      ${Number(product.price).toFixed(2)}
                    </td>
                    <td className="cart-product-quantity">
                      {product.quantity}
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


  render() {
    debugger
    return <div>{this.getProductsList()}</div>
  }

}


export default withRouter(Order);
