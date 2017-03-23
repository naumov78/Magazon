import * as APIUtil from '../util/categories_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const receiveCategories = ({categories}) => {
  debugger
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export const fetchAllCategories = () => {
  return (dispatch) => {
    return APIUtil.fetchAllCategories().then((categories) => {
      return dispatch(receiveCategories(categories));
    })
  }
}
