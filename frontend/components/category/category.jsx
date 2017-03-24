import React from 'react';
import { withRouter, Link } from 'react-router';



class Category extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: null }
  }


  componentWillReceiveProps(nextProps) {
    let id = nextProps.params.id
    if (id !== this.props.params.id) {
      this.props.fetchCategory(id).then((result) => {
        this.setState({ products: result.products })
    });
    }
  }

  componentDidMount() {
    this.props.fetchCategory(this.props.params.id).then((result) => {
      this.setState({ products: result.products })
    })
  }

  getProductsList() {
    const products = this.state.products
    return (
      <ul>
        {products.map((product, i) => {
          return (
            <li key={`${i}`}>
              <p>+++++++++++++++++++++++++++++++++++</p>
              <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                {product.title}
              </Link>
              <p>------------</p>
                {product.full_description}
                {product.price}
            </li>
          );
        })}
      </ul>
    )
  }

  render() {
    if (this.state.products) {
    return (
      <div>{this.getProductsList()}</div>
    );
    } else {
      return null;
    }
  }

}

export default withRouter(Category);
