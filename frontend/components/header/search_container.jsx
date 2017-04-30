import React from 'react';
import { searchProduct } from '../../actions/product_actions';
import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = ({products}) => {
  return ({
    products
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    searchProduct: (query) => dispatch(searchProduct(query))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Search);
