import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import SessionFormContainer from './session/SessionForm.container';
import CategoryContainer from './category/Category.container';
import ProductContainer from './product/Product.container';
import CartContainer from './cart/Cart.container';
import CartAddressContainer from './cart/CartAddress.container';
import CartPaymentContainer from './cart/CartPayment.container';
import PlaceOrderContainer from './cart/PlaceOrder.container';
import OrderContainer from './orders/Order.container';
import OrdersContainer from './orders/Orders.container';
import App from './App';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser){
      replace('/');
    }
  };

  const _ensureLogIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
      if (!currentUser) {
        replace('/signin');
      }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/signup' component={ SessionFormContainer} onEnter={ _redirectIfLoggedIn }>
          <Route path='/signin' component={ SessionFormContainer} />
        </Route>
        <Route path='/' component={ App } >
            <Route path='/categories/:id' component={ CategoryContainer } />
            <Route path='/categories/:id/products/:id' component={ ProductContainer } />
            <Route path='/cart' component={ CartContainer } onEnter={ _ensureLogIn } />
            <Route path='/cart_address' component={ CartAddressContainer } />
            <Route path='/cart_payment' component={ CartPaymentContainer } />
            <Route path='/place_order' component={ PlaceOrderContainer } />
            <Route path='/orders/:id' component={ OrderContainer } />
            <Route path='/orders' component= { OrdersContainer } onEnter={ _ensureLogIn }/>
        </Route>
      </Router>
    </Provider>
  );
};



export default Root;
