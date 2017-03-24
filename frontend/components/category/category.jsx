import React from 'react';
import { withRouter, Link } from 'react-router';



class Category extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: null }
  }


  componentWillReceiveProps(nextProps) {
    debugger
    let id = nextProps.params.id
    if (id !== this.props.params.id) {
      this.props.fetchCategory(id).then((result) => {
        this.setState({ products: result.products })
    });
    }
  }

  componentDidMount() {
    debugger
    this.props.fetchCategory(this.props.params.id).then((result) => {
      this.setState({ products: result.products })
    })
    // const products = store.getState().category.products
    // debugger
    // this.setState({ products: products })
  }

  // componentWillReceiveProps(newProps) {
  //   debugger
  //   this.setState(newProps.category.products)
  // }

  getProductsList() {
    const products = this.state.products
    debugger
    return (
      <ul>
        {products.map((product, i) => {
          return (
            <li key={`${i}`}>
              <p>+++++++++++++++++++++++++++++++++++</p>
              <Link to={`/products/${product.id}`} >
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
