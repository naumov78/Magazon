import React from 'react';
import { logout } from '../actions/session_actions';
import StoreFrontContainer from './storefront/storefront_container';
import SessionStatusContainer from './session_status/session_status_container';

const App =({ children }) => {
    return(
      <section>
        <nav>
          { children }
          <SessionStatusContainer />
          <StoreFrontContainer />
        </nav>
      </section>
    );
  };


export default App;
