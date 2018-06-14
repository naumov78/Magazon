import React from 'react';
import { connect } from 'react-redux';
import ExistingAddress from './ExistingAddress';
import { updateAddress } from '../../actions/address.actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    updateAddress: (address, address_id) => dispatch(updateAddress(address, address_id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExistingAddress);
