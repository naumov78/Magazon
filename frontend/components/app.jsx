import React from 'react';
import { logout } from '../actions/session_actions';
import CategoriesContainer from './categories/categories_container';
import SessionStatusContainer from './session_status/session_status_container';
import StorefrontContainer from './storefront/storefront/storefront_container';
import WatchedProductsContainer from './storefront/watched_products/watched_products_container';

const App =({ children }) => {
  const a = children
  debugger
    return(
      <section>
        <nav>
          <SessionStatusContainer />
          <CategoriesContainer />
        </nav>
          <StorefrontContainer />
          <WatchedProductsContainer />
          { children }
      </section>
    );
  };


export default App;
