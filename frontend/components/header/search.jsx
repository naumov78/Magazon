import React from 'react';
import { Link } from 'react-router';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: "", products: null }
  }

  update(field) {
    debugger
    return(e) => this.setState({
      [field]: e.currentTarget.value
    }, this.searchProduct);
  }

  searchProduct() {
    const query = this.state.query;
    debugger
    if (query === "") {
      return;
    } else {
      debugger
      this.props.searchProduct(query).then((result) => {
        debugger
        this.setState({ products: result.products })
      })
    }
  }

  getProductList() {
    debugger
    const products = this.state.products;
    return (
      <ul>
        {products.map((product, i) => {
          return (
            <li key={i}>
              <Link to={`/categories/${product.category_id}/products/${product.id}`}>
                {product.title}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    if (!this.state.products) {
      return (
        <div className="search-bar">
          <form>
            <input type="text" onChange={this.update("query")} value={this.state.query} />
            <span className="search-icon"><i className="fa fa-search fa-lg" aria-hidden="true"></i></span>
          </form>
        </div>
      );
    } else {
      debugger
      return (
        <div>
          <div className="search-bar">
            <form>
              <input type="text" onChange={this.update("query")} value={this.state.query} />
              <span className="search-icon"><i className="fa fa-search fa-lg" aria-hidden="true"></i></span>
            </form>
          </div>
          <div>
            {this.getProductList()}
          </div>
        </div>
      );
    }
  }

}



export default Search;
