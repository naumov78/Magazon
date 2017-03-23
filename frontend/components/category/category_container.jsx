import React from 'react';
import { connect } from 'react-redux';
import Category from './category';
import { fetchCategory } from '../../actions/categories_actions';


const mapStateToProps = (state) => {
  return ({

  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCategory: (id) => dispatch(fetchCategory(id))
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
