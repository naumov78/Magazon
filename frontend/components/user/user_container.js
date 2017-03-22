import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};

export default connect(
  mapStateToProps,
  null
)(User);
