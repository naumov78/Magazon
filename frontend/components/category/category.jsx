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
      <ul className="category-list">
        {products.map((product, i) => {
          return (
            <li key={i} className="product-line">
              <div className="product-list">
                <div>
                <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                  <span className="product-title">{product.title}</span>
                </Link>
                </div>
                <div className="product-descr">
                  Description: {product.full_description}
                </div>
                <div className="product-price">
                  Price: ${product.price}
                </div>
                <div className="addToCart-button">
                  <button onClick={() => this.addToCart(product.id)}>Add to cart</button>
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
      <div className="category-container">{this.getProductsList()}</div>
    );
    } else {
      return null;
    }
  }

}

export default withRouter(Category);
