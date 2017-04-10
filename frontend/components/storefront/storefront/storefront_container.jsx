import React from 'react';
import { connect } from 'react-redux';
import Storefront from './storefront';
import { getStorefront } from '../../../actions/storefronts_actions';
import { addToCart } from '../../../actions/cart_actions';


const mapStateToProps = (state) => {
  return ({
    storefront: state.storefront
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getStorefront: () => dispatch(getStorefront()),
    addToCart: (product_id, quantity) => dispatch(addToCart(product_id, quantity))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Storefront);
