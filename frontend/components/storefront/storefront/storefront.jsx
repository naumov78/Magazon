import React from 'react';
import { withRouter, Link } from 'react-router';



class Storefront extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: [] }
  }


  // componentWillReceiveProps(nextProps) {
  //   let id = nextProps.params.id
  //   if (id !== this.props.params.id) {
  //     this.props.fetchCategory(id).then((result) => {
  //       this.setState({ products: result.products })
  //   });
  //   }
  // }

  componentDidMount() {
    this.props.getStorefront().then((result) => {
      this.setState({ products: result.storefront })
    })
  }

  updateTitleLength(str) {
    if (str && str.length > 55) {
      return str.slice(0, 52) + "..."
    }
    return str;
  }


  getProductsList() {
    const products = this.state.products
    return (
      <ul className="storefront-list">
        {products.map((product, i) => {
          debugger
          return (
            <li key={i} className="product-block">
              <div className="frontstore-product">
                <div>
                  <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                    <span className="product-img"><img src={product.product_pictures[0].image_url} /></span>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    )
  }

  render() {
    if (this.state.products && this.props.location.pathname == "/") {
    return (
      <div className="storefront-container">{this.getProductsList()}</div>
    );
    } else {
      return <div></div>;
    }
  }

}

export default withRouter(Storefront);






// <div className="product-title">
//   {this.updateTitleLength(product.title)}
// </div>
// <div className="product-price">
//   Price: ${product.price}
// </div>




// <div className="addToCart-button">
//   <button onClick={() => this.props.addToCart(product.id, 1)}>Add to cart</button>
// </div>
