import React from 'react';
import { connect } from 'react-redux';
import Address from './Address';
import { createAddress } from '../../actions/address.actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createAddress: (address) => dispatch(createAddress(address))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
