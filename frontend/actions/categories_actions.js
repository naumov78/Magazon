import * as APIUtil from '../util/categories_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export const receiveCategories = ({categories}) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const receiveCategory = ({products}) => {
  debugger
  return {
    type: RECEIVE_CATEGORY,
<<<<<<< HEAD
    products
  }
}
=======
    category
  };
};
>>>>>>> 9dcda6812a25ee8e407a71ed5b75dca4e64bcd18


export const fetchAllCategories = () => {
  return (dispatch) => {
    return APIUtil.fetchAllCategories().then((categories) => {
      return dispatch(receiveCategories(categories));

    });
  };
};



export const fetchCategory = (id) => {
  debugger
  return (dispatch) => {
    return APIUtil.fetchCategory(id).then((category) => {
      debugger
      return dispatch(receiveCategory(category));
    });
  };
};
