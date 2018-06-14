import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { fetchProduct } from '../../actions/product.actions';
import { getWatchedProducts } from '../../actions/watchedProducts.actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchProduct: (category_id, product_id) => dispatch(fetchProduct(category_id, product_id)),
    getWatchedProducts: () => dispatch(getWatchedProducts())
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
