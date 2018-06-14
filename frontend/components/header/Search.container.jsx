import React from 'react';
import Search from './Search';
import { searchProduct } from '../../actions/product.actions';
import { connect } from 'react-redux';

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
