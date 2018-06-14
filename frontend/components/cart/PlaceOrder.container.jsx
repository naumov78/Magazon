import React from 'react';
import { connect } from 'react-redux';
import PlaceOrder from './PlaceOrder';
import { fetchCart } from '../../actions/cart.actions';
import { createOrder } from '../../actions/order.actions';
import { updateBoughtTogether } from '../../actions/product.actions';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
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
