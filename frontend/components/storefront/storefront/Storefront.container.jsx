import React from 'react';
import { connect } from 'react-redux';
import Storefront from './Storefront';
import { getStorefront } from '../../../actions/storefronts.actions';
import { addToCart } from '../../../actions/cart.actions';


const mapStateToProps = ({storefront}) => ({
  storefront
});

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
