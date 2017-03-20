import React from 'react';


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
