import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import UserContainer from './user/user_container';
import CategoryContainer from './category/category_container';
import App from './app';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser){
      replace('/');
    }
  };

    return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/signup' component={ SessionFormContainer} onEnter={ _redirectIfLoggedIn }/>
        <Route path='/signin' component={ SessionFormContainer} onEnter={ _redirectIfLoggedIn }/>
        <Route path='/' component={ App } >
            <Route path='/users/:id' component={ UserContainer }/>
            <Route path='/categories/:id' component={ CategoryContainer } />
        </Route>
      </Router>
    </Provider>
  );
};



export default Root;
