import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => {
    return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App } />
        <Route path='/signup' component={ SessionFormContainer} />
        <Route path='/signin' component={ SessionFormContainer } />
      </Router>
    </Provider>
  );
};

export default Root;
