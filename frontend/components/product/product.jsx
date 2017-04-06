import React from 'react';
import { withRouter, Link } from 'react-router';
import BoughtTogether from './bought_together';
import GetFiftyOff from './get_fifty_off';



class Product extends React.Component {

  constructor(props) {
  super(props);
  this.state = { product: {}, main_picture: null}
  }

  componentWillUnmount() {
    this.props.getWatchedProducts()
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (this.props.params !== nextProps.params) {
      this.props.fetchProduct(Number(nextProps.params.id[0]), Number(nextProps.params.id[1])).then((result) => {
        this.setState({ product: result.product, main_picture: result.product.product_pictures[0] }, this.scrollToTop())
      })
    }
  }

  componentDidMount() {
      this.props.fetchProduct(Number(this.props.params.id[0]), Number(this.props.params.id[1])).then((result) => {
        this.setState({ product: result.product, main_picture: result.product.product_pictures[0] })
      })
  }

  addToCart(id, quantity) {
    debugger
    this.props.addToCart(id, quantity)
  }

  changeMainPicture(e, idx) {
    debugger
    e.preventDefault();
    this.setState({ main_picture: this.state.product.product_pictures[idx] })
  }

  getSmallImageClass(pic) {
    if (pic.image_url === this.state.main_picture.image_url) {
      return "small-main-image";
    } else {
      return "alt-product-image";
    }
  }



  render() {
    debugger
    if (this.state.product.title) {
    return (
      <div className="product-container">

        <div>
          <ul className="alt-images">
            {this.state.product.product_pictures.map((picture, i) => {
              return (
                <li key={i} className={this.getSmallImageClass(picture)}>
                  <a onMouseOver={(e) => this.changeMainPicture(e, i)}>
                    <img src={picture.image_url} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="product-info-container">

          <div className="main-image">
            <img src={this.state.main_picture.image_url} />
          </div>

          <div className="product-info">

            <div className="product-product-title">{this.state.product.title}</div>
            <div className="product-product-descr">{this.state.product.full_description}</div>
            <div className="product-product-price">
              <span className="price-title">Price: </span>
              <span className="price">${Number(this.state.product.price).toFixed(2)}</span>
            </div>
              <GetFiftyOff price={this.state.product.price} />
            <div className="product-order">
              <span className="addToCart-button"><button onClick={() => this.addToCart(this.state.product.id, 1)}>Add to Cart</button></span>
            </div>


            <div className="bought-together-container">
              <BoughtTogether product={this.state.product} />
            </div>


          </div>

        </div>

      </div>
    );
  } else {
    return null;
  }
}

}


export default withRouter(Product);
