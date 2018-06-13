import React from 'react';
import { withRouter } from 'react-router';
import { logout } from '../actions/session_actions';
import HeaderContainer from './header/header_container';
import CategoriesContainer from './categories/categories_container';
import StorefrontContainer from './storefront/storefront/storefront_container';
import WatchedProductsContainer from './storefront/watched_products/watched_products_container';
import Footer from './footer/footer';
import MainStorefrontContainer from './storefront/main_storefront_container';

const App = ({ children }) => {
  let indexPage = false;
  if (!children) {
    indexPage = true;
  }
    return(
      <div id="top" className="main-container">
        <div>
          <HeaderContainer>
            <CategoriesContainer />
          </HeaderContainer>
        </div>
        <div>
          <MainStorefrontContainer indexPage={indexPage} />
        </div>
        <div>
          { children }
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  };


export default App;
