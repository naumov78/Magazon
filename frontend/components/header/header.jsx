import React from 'react';
import { withRouter, Link } from 'react-router';
import SearchContainer from './search_container';

class Header extends React.Component {

  constructor(props) {
  super(props);
  this.categories = null;
  this.state = { productsInCart: this.props.cart.length, categoryMenu: false, searchResults: false }
  this.showCategoryMenu = this.showCategoryMenu.bind(this);
  this.hideCategoryMenu = this.hideCategoryMenu.bind(this);
  }

  componentWillMount() {
    this.props.fetchCart()
  }

  componentWillReceiveProps() {
    this.getProductsInCart()
    this.setState({ categoryMenu: false, searchResults: false })
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
          {this.props.children}
        </div>
      )
    } else {
      return null;
    }
  }

  getProductsInCart() {
    if (this.props.currentUser) {
      let total = 0
      const cart = store.getState().cart.cart
      let i = 0
      while (typeof cart[i] !== "undefined") {
          total += cart[i].quantity
          i++;
        }
      this.setState({ productsInCart: total })
    } else {
      return null;
    }
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
      return (
        <div className="no-welcome-message">
          <Link to={"/signin"}>
            <span className="login-button"><button>Sign In</button></span>
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="header-container">
        <div className="logo">
          <Link to={"/"}>
            <img src={ window.asset.logo } className="signup-logo"/>
          </Link>
        </div>

        <div className="categories-search-container">
          <SearchContainer searchResults={this.state.searchResults} />
        </div>

        <div className="header-buttons">
          <div className="categories-button">
            <p onMouseOver={this.showCategoryMenu}>
              Departments
              <span className="caret-down-icon"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
            </p>
            {this.getCategoryMenu()}
          </div>
          <div>
            {this.getWelcomeMessage()}
          </div>
          <div>
            {this.getOrdersButton()}
          </div>
        </div>
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
