import React from 'react';
import { withRouter, Link } from 'react-router';



class StoreFront extends React.Component {

  constructor(props) {
  super(props);
  this.state = { categories: null }
  }

  componentWillMount() {
    debugger
  }

  componentDidMount() {
    debugger
    this.props.fetchAllCategories()
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.categories)
  }

  getCategoriesList() {
    const categories = this.state.categories
    debugger
    return (
      <ul>
        {categories.map((category, i) => {
          return (
            <li key={`${i}`}>
              <Link to={`/categories/${category.id}`} >
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    )
  }

  render() {
    debugger
    if (this.state.categories) {
      return (
        <div>{this.getCategoriesList()}</div>
      )
    } else {
      return null;
    }
  }

}

export default withRouter(StoreFront)
