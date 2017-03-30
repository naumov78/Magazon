import React from 'react';
import { connect } from 'react-redux';
import WatchedProducts from './watched_products';
import { getWatchedProducts } from '../../../actions/watched_products_actions';


const mapStateToProps = (state) => {
  return ({
    watchedProducts: state.watchedProducts.watchedProducts
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getWatchedProducts: () => dispatch(getWatchedProducts())
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchedProducts);
