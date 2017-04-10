import React from 'react';
import { withRouter, Link } from 'react-router';
import SearchBar from './search_bar';



class Header extends React.Component {

  constructor(props) {
  super(props);
  this.categories = null;
  this.state = { productsInCart: this.props.cart.length, categoryMenu: false }
  this.showCategoryMenu = this.showCategoryMenu.bind(this);
  this.hideCategoryMenu = this.hideCategoryMenu.bind(this);
  }

  componentWillMount() {
    this.props.fetchCart()
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

  getOrdersButton() {
    if (this.props.currentUser) {
      if (this.props.currentUser.orders.length > 0) {
        return (
          <div className="orders-button">
            <Link to={"/orders"}>
              <p>Orders</p>
            </Link>
          </div>
        )
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  getWelcomeMessage() {
    if (this.props.currentUser) {
      return (
        <div className="welcome-message">
          <span className="welcome-message-text">{`Hello, ${this.props.currentUser.first_name}`}</span>
          <span className="logout-button"><button onClick={() => this.props.logout()}>Logout</button></span>
        </div>
      )
    } else {
      return null;
    }
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

        <div className="categories-search-container">

          <SearchBar />

          <div className="categories-button">
            <p onMouseOver={this.showCategoryMenu}>
              Departments
              <span className="caret-down-icon"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
            </p>
            {this.getCategoryMenu()}
          </div>
        </div>
          {this.getWelcomeMessage()}
          {this.getOrdersButton()}

        <div className="cart-info">
          <div>
            <Link to={"/cart"}>
              <span>
                <i className="fa fa-shopping-cart fa-4x" aria-hidden="true"></i> Cart
              </span>
              <span id="cart-items">
                { this.state.productsInCart }
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }


}

export default Header;
