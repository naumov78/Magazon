import React from 'react';
import { connect } from 'react-redux';
import Product from './product';
import { fetchProduct, fetchProductFromCategory } from '../../actions/product_actions';
import { addToCart } from '../../actions/cart_actions';

const mapStateToProps = (state) => {
  return ({

  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchProductFromCategory: (category_id, product_id) => dispatch(fetchProductFromCategory(category_id, product_id)),
    addToCart: (product_id) => dispatch(addToCart(product_id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
