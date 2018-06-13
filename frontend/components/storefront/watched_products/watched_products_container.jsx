import React from 'react';
import { connect } from 'react-redux';
import WatchedProducts from './watched_products';
import { getWatchedProducts } from '../../../actions/watched_products_actions';
import { addToCart } from '../../../actions/cart_actions';


const mapStateToProps = ({watchedProducts, session}) => {
  return ({
    watchedProducts: watchedProducts.watchedProducts,
    currentUser: session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getWatchedProducts: () => dispatch(getWatchedProducts()),
    addToCart: (product_id, quantity) => dispatch(addToCart(product_id, quantity))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchedProducts);
