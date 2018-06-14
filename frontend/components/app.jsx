import React from 'react';
import { withRouter } from 'react-router';
import { logout } from '../actions/session.actions';
import HeaderContainer from './header/Header.container';
import CategoriesContainer from './categories/Categories.container';
import StorefrontContainer from './storefront/storefront/Storefront.container';
import WatchedProductsContainer from './storefront/watched_products/WatchedProducts.container';
import Footer from './footer/footer';
import MainStorefrontContainer from './storefront/MainStorefront.container';

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
