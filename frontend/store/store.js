import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk';
//may want to add createLogger for easier console reading

const middleware = [];

middleware.push(thunkMiddleware);

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
