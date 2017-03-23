import React from 'react';
import { logout } from '../actions/session_actions';


const App =({ children }) => {
    return(
      <section>
        <nav>
          { children }
        </nav>
      </section>
    );
  };


export default App;
