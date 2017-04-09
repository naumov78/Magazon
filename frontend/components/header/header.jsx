import React from 'react';
import { withRouter, Link } from 'react-router';
import SearchBar from './search_bar';



class Header extends React.Component {

  constructor(props) {
  super(props);
  this.categories = null;
  this.state = { productsInCart: 0, categoryMenu: false }
  this.showCategoryMenu = this.showCategoryMenu.bind(this);
  this.hideCategoryMenu = this.hideCategoryMenu.bind(this);
  }


  componentWillReceiveProps() {
    this.getProductsInCart()
    this.setState({ categoryMenu: false })
  }

  showCategoryMenu() {
    this.setState({ categoryMenu: true })
  }

  hideCategoryMenu() {
    this.setState({ categoryMenu: false })
  }


  getCategoryMenu() {
    if (this.state.categoryMenu) {
      return (
        <div onMouseLeave={this.hideCategoryMenu} className="category-menu-container">
          {this.props.children[1]}
        </div>
      )
    } else {
      return null;
    }
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
    debugger
    return (
      <div className="header-container">
        <div className="logo">
          <Link to={"/"}>
            <img src={ window.asset.logo } className="signup-logo"/>
          </Link>
        </div>

        <div>
          <div className="categories-search-container">
            <SearchBar />
          </div>

          <div className="categories-button">
            <p onMouseOver={this.showCategoryMenu}>Departments</p>
            {this.getCategoryMenu()}
          </div>
        </div>

        <div>
          <div>Products in cart: { this.state.productsInCart }</div>
        </div>
      </div>
    )
  }


}

export default Header;
