import React from 'react';
import { withRouter, Link } from 'react-router';
import CartAddressContainer from './CartAddress.container';
import CartPaymentContainer from './CartPayment.container';


class PlaceOrder extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: [] }
  }

  componentWillMount() {
    this.props.fetchCart(this.props.currentUser.cart_id).then((result) => {
      this.setState({ products: result.cart })
    });
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


  createOrder(e) {
    e.preventDefault();
    this.props.updateBoughtTogether();
    this.props.createOrder().then((result) => {
      this.props.fetchCart(this.props.currentUser.cart_id)
      this.props.router.push(`/orders/${result.order[0].order_id}`)
    });
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
                        <Link to={`/categories/${product.product.category_id}/products/${product.product.id}`} >
                          <span className="cart-product-img"><img src={product.product_pictures[0].image_url} /></span>
                        </Link>
                      </div>
                      <div className="cart-product-title">
                        {product.product.title}
                      </div>
                      <div className="product-cart-descr">
                        {product.product.brief_description}
                      </div>
                    </td>
                    <td className="cart-product-price">
                      ${Number(product.product.price).toFixed(2)}
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
          );
        })}
      </ul>
    );
  }

  getTaxAmount() {
    return ((this.getTotal()*0.08875).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
  }

  getPlaceOrderButton() {
    if (this.props.currentUser.address_id && this.props.currentUser.payment_id ) {
      return (
        <div className="addToCart-button place-order-btn-block">
          <div id="btn"><button onClick={(e) => this.createOrder(e)}>Place order</button></div>
          <div className="cc-warning">Magazon is a fake store. Products are not going to be shipped.</div>
        </div>
      );
    } else {
      return (
        <span className="inactive-button"><button>Place order</button></span>
      );
    }
  }

  render() {
    if (this.getTotal() > 0) {
      return (
        <div className="cart-container">
          <h2>Place order</h2>
          <div className="place-order-existing-address"><CartAddressContainer /></div>
          <div className="place-order-existing-payment"><CartPaymentContainer /></div>

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
          <div id="place-btn" className="cart-buttons">
            {this.getPlaceOrderButton()}
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


export default withRouter(PlaceOrder);
