import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import App from './app';

const Root = ({ store }) => {
  debugger
    return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App } ></Route>
      </Router>
    </Provider>
  );
};

export default Root;
