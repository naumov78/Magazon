import React from 'react';
import { logout } from '../actions/session_actions';
import StoreFrontContainer from './storefront/storefront_container';
import SessionStatusContainer from './session_status/session_status_container';
import HeaderContainer from './header/header_container';

const App =({ children }) => {
    return(
      <section>
        <HeaderContainer />
        <nav>
          <SessionStatusContainer />
        </nav>
        <StoreFrontContainer />
        { children }
      </section>
    );
  };


export default App;
