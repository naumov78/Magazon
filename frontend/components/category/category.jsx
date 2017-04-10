import React from 'react';
import { withRouter, Link } from 'react-router';
import StorefrontContainer from '../storefront/storefront/storefront_container';
import WatchedProductsContainer from '../storefront/watched_products/watched_products_container';
import SmallBanner from '../storefront/small_banner';


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

  updateDescrLength(str) {
    if (str && str.length > 200) {
      return str.slice(0, 197) + "..."
    }
    return str;
  }

  componentDidMount() {
    this.props.fetchCategory(this.props.params.id).then((result) => {
      this.setState({ products: result.products })
    })
  }

  addToCart(id, quantity) {
    this.props.addToCart(id, quantity)
  }

  getProductsList() {
    const products = this.state.products
    return (
      <ul className="category-list">
        {products.map((product, i) => {
          return (
            <li key={i} className="product-line">
                <div className="product-picture">
                  <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                    <span id="image"><img src={product.product_pictures[0].image_url} /></span>
                  </Link>
                </div>

                <div className="category-product-info">
                  <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                    <span className="product-title">{product.title}</span>
                  </Link>

                  <div className="product-price">
                    <span className="price">${Number(product.price).toFixed(2)}</span>
                  </div>
                  <div className="product-descr">
                    {this.updateDescrLength(product.brief_description)}
                  </div>
                  <div className="addToCart-button">
                    <button onClick={() => this.addToCart(product.id, 1)}>Add to cart</button>
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
      <div className="category-container">

        <div className="central-block">
          <div className="left-col">
            <SmallBanner smallBanners={this.props.smallBanners} />
            <div className="category-left-sponsored">
              <StorefrontContainer />
            </div>
          </div>
            {this.getProductsList()}
          <div className="right-col">
            <div className="category-right-sponsored">
              <StorefrontContainer />
            </div>
            <SmallBanner smallBanners={this.props.smallBanners} />
          </div>
        </div>

        <div>
          <WatchedProductsContainer />
        </div>

      </div>
    );
    } else {
      return <div className="loading-page">
        <div>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
      </div>;
    }
  }

}

export default withRouter(Category);
