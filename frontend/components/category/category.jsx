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

  addToCart(id) {
    this.props.addToCart(id)
  }

  getProductsList() {
    const products = this.state.products
    return (
      <ul>
        {products.map((product, i) => {
          debugger
          return (
            <li key={`${i}`}>
              <div className="product-list">
                <div>
                <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                  <span className="product-title">{product.title}</span>
                </Link>
                <span><button onClick={() => this.addToCart(product.id)}>Add to cart</button></span>
                </div>
                <div className="product-descr">
                  {product.full_description}
                  {product.price}
                </div>
              </div>
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
