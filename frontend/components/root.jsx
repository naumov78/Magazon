import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import SessionForm from './session/session_form';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Route path='/welcome' component={ SessionForm } ></Route>
    </Provider>
  );
};

export default Root;
