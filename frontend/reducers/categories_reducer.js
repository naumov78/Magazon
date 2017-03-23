import { RECEIVE_CATEGORIES,  RECEIVE_CATEGORY } from '../actions/categories_actions';
import merge from 'lodash/merge';

const initialState = {
<<<<<<< HEAD
  categories: []
}
=======
    categories: []
};
>>>>>>> 9dcda6812a25ee8e407a71ed5b75dca4e64bcd18


const CategoriesReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, state, { categories: action.categories });
    default:
      return state;
  }
};

export default CategoriesReducer;
