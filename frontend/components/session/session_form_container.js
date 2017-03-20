import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  let loggedIn;
    debugger
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.signUpErrors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
