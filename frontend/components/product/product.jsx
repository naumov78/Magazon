import React from 'react';
import { withRouter, Link } from 'react-router';



class Product extends React.Component {

  constructor(props) {
  super(props);
  this.state = { products: null }
  }

  componentDidMount() {
    if (this.props.location.pathname[1] === 'p') {
      this.props.fetchProduct(Number(this.props.params.id))
    } else {
      this.props.fetchProductFromCategory(Number(this.props.params.category_id), Number(this.props.params.id))
    }
  }


  render() {
    const productId = (store.getState().product ? store.getState().product.id : null)
    const title = (store.getState().product ? store.getState().product.title : null)
    const briefDescription = (store.getState().product ? store.getState().product.brief_description : null)
    const fullDescription = (store.getState().product ? store.getState().product.full_description : null)
    const price = (store.getState().product ? store.getState().product.price : null)
    const discount = (store.getState().product ? store.getState().product.title : null)
    const onSale = (store.getState().product ? store.getState().product.on_sale : null)
    return (
      
      <div>This is the product</div>
    );
  }


}


export default withRouter(Product);
