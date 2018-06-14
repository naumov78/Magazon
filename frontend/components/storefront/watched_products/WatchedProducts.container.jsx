import React from 'react';
import { connect } from 'react-redux';
import WatchedProducts from './WatchedProducts';
import { getWatchedProducts } from '../../../actions/watchedProducts.actions';
import { addToCart } from '../../../actions/cart.actions';


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
