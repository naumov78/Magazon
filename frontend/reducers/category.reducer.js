import { RECEIVE_CATEGORY } from '../actions/categories.actions';
import merge from 'lodash/merge';

const initialState = {
  products: []
}

const CategoryReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORY:
      return merge({}, state, { products: action.products });
    default:
      return state;
  }
};

export default CategoryReducer;
