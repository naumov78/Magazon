import React from 'react';
import { connect } from 'react-redux';
import MainStorefront from './main_storefront';
import { getStorefront } from '../../actions/storefronts_actions';


const mapStateToProps = (state) => {
  debugger
  return ({
    storefront: state.storefront.storefront,
    smallBanners: state.storefront.smallBanners,
    bigBanners: state.storefront.bigBanners
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
)(MainStorefront);
