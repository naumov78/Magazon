import * as APIUtil from '../util/address_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const createAddress = (address) => {
  return (dispatch) => {
    return APIUtil.createAddress(address).then((user) => {
      return dispatch(receiveUser(user));
    });
  };
};

export const updateAddress = (address, address_id) => {
  return (dispatch) => {
    return APIUtil.updateAddress(address, address_id).then((user) => {
      return dispatch(receiveUser(user));
    });
  };
};
