import { RECEIVE_PRODUCTS } from '../actions/product.actions';
import merge from 'lodash/merge';

const initialState = {}

const ProductsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return merge({}, state, action.products);
    default:
      return state;
  }
}

export default ProductsReducer;
