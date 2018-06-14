import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session.actions';
import { RECEIVE_USER } from '../actions/cart.actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  signUpErrors: []
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      return merge({}, state, { currentUser: action.currentUser });
    case RECEIVE_USER:
      return merge({}, state, { currentUser: action.user });
    case RECEIVE_ERRORS:
      let errors = action.errors.responseJSON;
      return merge({}, state, { signUpErrors: errors });
    default:
      return state;
  }
};

export default SessionReducer;
