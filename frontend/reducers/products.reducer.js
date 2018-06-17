import { RECEIVE_PRODUCTS } from '../actions/product.actions';

const initialState = {}

const ProductsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, action.products);
    default:
      return state;
  }
}

export default ProductsReducer;
