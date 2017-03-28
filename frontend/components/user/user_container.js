import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};


const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
