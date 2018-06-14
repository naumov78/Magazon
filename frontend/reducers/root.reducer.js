import { combineReducers } from 'redux';
import SessionReducer from './session.reducer';
import CategoriesReducer from './categories.reducer';
import CategoryReducer from './category.reducer';
import ProductReducer from './product.reducer';
import ProductsReducer from './products.reducer';
import CartReducer from './cart.reducer';
import StorefrontReducer from './storefront.reducer';
import WatchedProductsReducer from './watchedProducts.reducer';
import OrderReducer from './order.reducer';

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
