import React from 'react';
import { withRouter, Link } from 'react-router';



class StoreFront extends React.Component {

  constructor(props) {
  super(props);
  this.state = { categories: null }
  }

  componentWillMount() {
<<<<<<< HEAD
  }

  componentDidMount() {
=======

  }

  componentDidMount() {

>>>>>>> 9dcda6812a25ee8e407a71ed5b75dca4e64bcd18
    this.props.fetchAllCategories()
  }

  componentWillReceiveProps(newProps) {
    debugger
    this.setState(newProps.categories)
  }

  getCategoriesList() {
    const categories = this.state.categories
<<<<<<< HEAD
=======

>>>>>>> 9dcda6812a25ee8e407a71ed5b75dca4e64bcd18
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
<<<<<<< HEAD
=======
  
>>>>>>> 9dcda6812a25ee8e407a71ed5b75dca4e64bcd18
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
