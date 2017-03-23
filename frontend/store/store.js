import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk';
import logger from 'redux-logger';

const middleware = [];

middleware.push(thunkMiddleware);

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware, logger())
  );
};

export default configureStore;
