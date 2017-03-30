import * as APIUtil from '../util/address_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (user) => {
  debugger
  return {
    type: RECEIVE_USER,
    user
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}


export const createAddress = (address) => {
  debugger
  return (dispatch) => {
    return APIUtil.createAddress(address).then((user) => {
      debugger
      return dispatch(receiveUser(user));
    });
  };
}