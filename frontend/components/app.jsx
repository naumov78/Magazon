import React from 'react';
import { logout } from '../actions/session_actions';
import StoreFrontContainer from './storefront/storefront_container';

const App =({ children }) => {
    return(
      <section>
        <nav>
          { children }
          <StoreFrontContainer />
        </nav>
      </section>
    );
  };


export default App;
