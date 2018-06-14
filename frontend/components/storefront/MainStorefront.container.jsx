import React from 'react';
import { connect } from 'react-redux';
import MainStorefront from './MainStorefront';
import { getStorefront } from '../../actions/storefronts.actions';

// TODO: refactor
const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
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
