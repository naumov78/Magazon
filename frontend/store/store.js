import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk';

const middleware = [];

middleware.push(thunkMiddleware);

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  middleware.push(createLogger());
}

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
