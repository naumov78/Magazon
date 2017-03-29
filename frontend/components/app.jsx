import React from 'react';
import { logout } from '../actions/session_actions';
import CategoriesContainer from './categories/categories_container';
import SessionStatusContainer from './session_status/session_status_container';

const App =({ children }) => {
    return(
      <section>
        <nav>
          <SessionStatusContainer />
          <CategoriesContainer />
        </nav>
          { children }
      </section>
    );
  };


export default App;
