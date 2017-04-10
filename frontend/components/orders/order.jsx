import React from 'react';
import { withRouter, Link } from 'react-router';




class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = { products: [], order_id: null, posted: null, status: null, total_amount: null, order: null }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.fetchOrder(Number(this.props.params.id)).then((result) => {
      this.setState({ products: result.order,
        order_id: result.order_id,
        posted: result.posted,
        status: result.status,
        total_amount: result.total_amount,
        order: result.products })
    })
  }

  componentDidMount() {
    this.props.refreshCurrentUser();
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

  getUserName() {
    if (this.props.currentUser) {
      return (
        `${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`
      );
    } else {
      return null;
    }
  }

  getOrderDate(posted) {
      const date = new Date(posted);
      let monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      debugger
      const Mon = monthNames[date.getMonth()];
      const Day = date.getDate();
      const Yr = 1900 + date.getYear();
      return `${Mon} ${Day}, ${Yr}`
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

  getStatusStyle() {
    switch (this.state.status) {
    case "Received":
      return "received-order"
    case "Pending":
      return "pending-order"
    case "Unshipped":
      return "unshipped-order"
    case "Shipped":
      return "shipped-order"
    case "Delivered":
      return "delivered-order"
    case "Canceled":
      return "canceled-order"
    default:
      return
    }
  }

  getTaxAmount() {
    return ((this.getTotal()*0.08875).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
  }

  getOrderNum(order_id) {
    return order_id * 6532497 + ' - ' + order_id * 165
  }

  // getTitleMessage() {
  //   if (this.props.fromOrderList) {
  //
  //   } else {
  //     return (
  //       <div>
  //         <h3>{`Thank you for your order! Your Order #${this.getOrderNum(Number(this.props.params.id))} has been placed.`}</h3>
  //       </div>
  //     );
  //   }
  // }


  render() {
    debugger
    if (this.getTotal() > 0) {
    return (
      <div className="order-details-container">
        <h2>Order Details</h2>
        <div className="cart-container">
          <div className="order-page-title-block">
            <div>order placed <br />{this.getOrderDate(this.state.posted)}</div>
            <div>Status <br /><span className={this.getStatusStyle()}>{this.state.status}</span></div>
            <div>
              total <br />$ {Number(this.state.total_amount * 1.08875).toFixed(2)}
            </div>
            <div>ship to <br /> {this.getUserName()}</div>
            <div>Order #: {this.getOrderNum(this.state.order_id)}</div>
          </div>

          <div className="cart-product-list">{this.getProductsList()}</div>
            <div className="cart-totals">
              <div className="total-cart-amount">
                <div className="total-line">
                  <span className="order-total-title">Total before tax:</span>
                  <span className="order-total-amount">${this.getTotal().toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span>
                </div>
              </div>
              <div className="total-cart-amount">
                <div className="total-line">
                  <span className="order-total-title">Estimated tax to be collected:</span>
                  <span className="order-total-amount">${this.getTaxAmount()}</span>
                </div>
              </div>
              <div className="total-cart-amount">
                <div id="order-total" className="total-line">
                  <span className="order-total-title">Order total:</span>
                  <span className="order-total-amount">${(Number(this.getTotal()) + Number(this.getTaxAmount())).toFixed(2)}</span>
                </div>
              </div>
            </div>
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
