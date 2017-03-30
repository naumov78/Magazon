import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CategoriesReducer from './categories_reducer';
import CategoryReducer from './category_reducer';
import ProductReducer from './product_reducer';
import CartReducer from './cart_reducer';
import StorefrontReducer from './storefront_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  categories: CategoriesReducer,
  category: CategoryReducer,
  product: ProductReducer,
  cart: CartReducer,
  storefront: StorefrontReducer
});

export default RootReducer;
