import React from 'react';
import { logout } from '../actions/session_actions';
import CategoriesContainer from './categories/categories_container';
import SessionStatusContainer from './session_status/session_status_container';
import StorefrontContainer from './storefront/storefront/storefront_container';
import WatchedProductsContainer from './storefront/watched_products/watched_products_container';
import Footer from './footer/footer';

const App =({ children }) => {
  const a = children
    return(
      <div id="top" className="main-container">
        <nav>
          <SessionStatusContainer />
          <CategoriesContainer />
        </nav>
        <div>
          <StorefrontContainer />
        </div>
        <div>
          <WatchedProductsContainer />
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
