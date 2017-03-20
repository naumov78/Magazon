import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  let loggedIn;
  return {
    loggedIn: Boolean(state.session.currentUser),
  };
};

export default connect(
  mapStateToProps
)(SessionForm);
