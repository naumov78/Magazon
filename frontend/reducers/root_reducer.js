import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CategoriesReducer from './categories_reducer';
import CategoryReducer from './category_reducer';
import ProductReducer from './product_reducer';
import ProductsReducer from './products_reducer';
import CartReducer from './cart_reducer';
import StorefrontReducer from './storefront_reducer';
import WatchedProductsReducer from './watched_products_reducer';
import OrderReducer from './order_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  categories: CategoriesReducer,
  category: CategoryReducer,
  product: ProductReducer,
  products: ProductsReducer,
  cart: CartReducer,
  storefront: StorefrontReducer,
  watchedProducts: WatchedProductsReducer,
  order: OrderReducer
});

export default RootReducer;
