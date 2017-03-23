import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CategoriesReducer from './categories_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  categories: CategoriesReducer
});

export default RootReducer;
