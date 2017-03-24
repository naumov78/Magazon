import { RECEIVE_PRODUCT } from '../actions/product_actions';
import merge from 'lodash/merge';

const initialState = {}


const ProductReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return merge({}, state, action.product);
    default:
      return state;
  }
}

export default ProductReducer;
