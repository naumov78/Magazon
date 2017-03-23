import { RECEIVE_CATEGORIES } from '../actions/categories_actions';
import merge from 'lodash/merge';

const initialState = {
}


const CategoriesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
    debugger
      return merge({}, state, action.categories );
    default:
      return state;
  }
};

export default CategoriesReducer;
