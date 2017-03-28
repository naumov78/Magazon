import React from 'react';
import { withRouter, Link } from 'react-router';



class Header extends React.Component {

  constructor(props) {
  super(props);
  this.state = { productsInCart: 0 }
  }

  componentWillReceiveProps(nextProps) {
    this.getProductsInCart()
  }

  getProductsInCart() {
    let total = 0
    const cart = store.getState().cart.cart
    let i = 0
    while (typeof cart[i] !== "undefined") {
        total += cart[i].quantity
        i++;
      }
    this.setState({ productsInCart: total })
  }

  render() {
    return (
      <div>Products in cart: { this.state.productsInCart }</div>
    )
  }


}

export default Header;
