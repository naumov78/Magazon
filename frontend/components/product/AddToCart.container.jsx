import React from 'react';
import { connect } from 'react-redux';
import AddToCart from './AddToCart';
import { addToCart } from '../../actions/cart.actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    smallBanners: state.storefront.smallBanners
  })
}


const mapDispatchToProps = (dispatch) => {
  return ({
    addToCart: (product_id, quantity) => dispatch(addToCart(product_id, quantity))
  })
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);
