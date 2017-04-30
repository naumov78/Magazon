import React from 'react';
import { Link } from 'react-router';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: "", products: null, searchResults: this.props.searchResults }
    this.hideSearchResults = this.hideSearchResults.bind(this);
  }

  update(field) {
    return(e) => this.setState({
      [field]: e.currentTarget.value
    }, this.searchProduct);
  }

  searchProduct() {
    const query = this.state.query;
    if (query === "") {
      return;
    } else {
      this.props.searchProduct(query).then((result) => {
        this.setState({ products: result.products, searchResults: true })
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    debugger
  }

  hideSearchResults() {
    this.setState({searchResults: false, query: "" })
  }

  getProductList() {
    const products = this.state.products;
    return (
      <ul>
        {products.map((product, i) => {
          return (
            <li key={i}>
              <Link to={`/categories/${product.category_id}/products/${product.id}`} onClick={this.hideSearchResults}>
                {product.title}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    if (!this.state.searchResults) {
      debugger
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
