import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root.reducer';
import thunkMiddleware from '../middleware/thunk';
import axios from 'axios';

const middleware = [];

middleware.push(thunkMiddleware);

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  middleware.push(createLogger());
}

const configureStore = (preloadedState = {}) => {

  // setting up default axios header
  axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
