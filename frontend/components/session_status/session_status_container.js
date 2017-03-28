import { connect } from 'react-redux';
import SessionStatus from './session_status';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  let loggedIn;
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionStatus);
