import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import { fetchCategory } from '../../actions/categories.actions';
import { addToCart } from '../../actions/cart.actions';


const mapStateToProps = ({storefront}) => {
  return ({
    smallBanners: storefront.smallBanners
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCategory: (id) => dispatch(fetchCategory(id)),
    addToCart: (product_id, quantity) => dispatch(addToCart(product_id, quantity))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
