import React from 'react';
import { connect } from 'react-redux';
import PlaceOrder from './place_order';
import { fetchCart } from '../../actions/cart_actions';
import { createOrder } from '../../actions/order_actions';
import { updateBoughtTogether } from '../../actions/product_actions';



const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCart: (cart_id) => dispatch(fetchCart(cart_id)),
    createOrder: () => dispatch(createOrder()),
    updateBoughtTogether: (category_id, product_id) => dispatch(updateBoughtTogether(category_id, product_id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceOrder);
