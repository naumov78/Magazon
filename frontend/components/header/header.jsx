import React from 'react';
import { withRouter, Link } from 'react-router';



class Header extends React.Component {

  constructor(props) {
  super(props);
  this.state = { productsInCart: 0 }
  }

  componentWillReceiveProps(nextProps) {
    debugger
    this.getProductsInCart()
  }

  getProductsInCart() {
    let total = 0
    const cart = store.getState().cart
    debugger
    let i = 0
    while (typeof cart[i] !== "undefined") {
        total += cart[i].quantity
        i++;
      }
    debugger
    this.setState({ productsInCart: total })
  }

  render() {
    debugger
    return (
      <div>Products in cart: { this.state.productsInCart }</div>
    )
  }


}

export default Header;
