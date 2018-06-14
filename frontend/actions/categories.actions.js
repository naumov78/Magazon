import * as APIUtil from '../api/categories.api';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export const receiveCategories = ({categories}) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const receiveCategory = ({products}) => {
  return {
    type: RECEIVE_CATEGORY,
    products
  };
};

export const fetchAllCategories = () => {
  return (dispatch) => {
    return APIUtil.fetchAllCategories().then((categories) => {
      return dispatch(receiveCategories(categories));
    });
  };
};

export const fetchCategory = (id) => {
  return (dispatch) => {
    return APIUtil.fetchCategory(id).then((category) => {
      return dispatch(receiveCategory(category));
    });
  };
};
