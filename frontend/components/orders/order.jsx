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
          return (
            <li key={i} className="cart-product-line">
              <table className="single-product-in-cart">
                <tbody>
                  <tr className="cart-product">
                    <td className="product-info-picture">
                      <div className="cart-product-image">
                        <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                          <span className="cart-product-img"><img src={product.product_pictures[0].image_url} /></span>
                        </Link>
                      </div>
                      <div className="cart-product-title">
                        {product.title}
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
    if (this.getTotal() > 0) {
    return (
      <div className="cart-container">
      <h3>Thank you for your order! Your Order had been placed. </h3>
        <div className="cart-product-list">{this.getProductsList()}</div>
        <div className="total-cart-amount">
          <span className="order-total-title">Total order amount:</span>
          <span className="order-total-amount">${this.getTotal().toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span>
        </div>
      </div>
    )
  } else {
    return <div className="loading-page">
      <div>
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </div>
    </div>;
  }

}


}
export default withRouter(Order);
