import { RECEIVE_PRODUCT } from '../actions/product.actions';

const initialState = {}

const ProductReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, action.product);
    default:
      return state;
  }
}

export default ProductReducer;
