import React from 'react';
import { connect } from 'react-redux';
import StoreFront from './storefront';
import { fetchAllCategories } from '../../actions/categories_actions';


const mapStateToProps = (state) => {
  return ({
    categories: state.categories
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllCategories: () => dispatch(fetchAllCategories())
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreFront);
