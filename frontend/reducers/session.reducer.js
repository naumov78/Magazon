import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session.actions';
import { RECEIVE_USER } from '../actions/cart.actions';

const initialState = {
  currentUser: null,
  signUpErrors: []
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.currentUser });
    case RECEIVE_USER:
      return Object.assign({}, state, { currentUser: action.user });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { signUpErrors: action.errors.responseJSON });
    default:
      return state;
  }
};

export default SessionReducer;
