import { RECEIVE_CATEGORIES,  RECEIVE_CATEGORY } from '../actions/categories.actions';

const initialState = {
  categories: []
}

const CategoriesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return Object.assign({}, state, { categories: action.categories });
    default:
      return state;
  }
};

export default CategoriesReducer;
