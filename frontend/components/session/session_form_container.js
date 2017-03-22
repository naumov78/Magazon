import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, signin } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  let loggedIn;
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.session.signUpErrors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType;
  let path = ownProps.location.pathname;
  formType = (path === '/signup' ? 'signup' : 'signin');
  const processForm = (formType === 'signup') ? signup : signin;
  return {
    formType,
    processForm: (user) => dispatch(processForm(user)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
