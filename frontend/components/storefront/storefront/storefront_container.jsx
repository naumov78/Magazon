import React from 'react';
import { connect } from 'react-redux';
import Storefront from './storefront';
import { getStorefront } from '../../../actions/storefronts_actions';


const mapStateToProps = (state) => {
  return ({
    storefront: state.storefront
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getStorefront: () => dispatch(getStorefront())
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Storefront);
