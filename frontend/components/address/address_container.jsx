import React from 'react';
import { connect } from 'react-redux';
import Address from './address';
import { createAddress } from '../../actions/address_actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createAddress: (address) => dispatch(createAddress(address))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
