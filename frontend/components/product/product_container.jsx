import React from 'react';
import { connect } from 'react-redux';
import Product from './product';
import { fetchProduct } from '../../actions/product_actions';
import { getWatchedProducts } from '../../actions/watched_products_actions';

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
