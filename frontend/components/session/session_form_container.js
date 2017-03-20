import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  let loggedIn;
  return {
    loggedIn: Boolean(state.session.currentUser),
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
