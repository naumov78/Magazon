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
    if (query.length === 0) {
      this.setState({ searchResults: false})
      return;
    } else if (query.length < 2) {
      this.setState({ products: [] })
    } else {
      this.props.searchProduct(query).then((result) => {
        this.setState({ products: result.products, searchResults: true })
      })
    }
  }


  hideSearchResults() {
    this.setState({searchResults: false, query: "" })
  }

  getProductList() {
    const products = this.state.products;
    if (products.length === 0) {
      return (
        <div className="search-results">
          <ul>
            <li className="search-results-line">
              <span id="not-found" onMouseLeave={this.hideSearchResults}>products not found...</span>
            </li>
          </ul>
        </div>
      )
    } else {
      return (
        <div  className="search-results">
          <ul onMouseLeave={this.hideSearchResults}>
            {products.map((product, i) => {
              return (
                <li key={i} className="search-results-line">
                  <Link onClick={this.hideSearchResults} to={`/categories/${product.category_id}/products/${product.id}`} >
                    <div>
                      <span>
                          <img src={product.image_url} />
                      </span>
                      <span id="title">
                          {product.title}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }

  }

  render() {
    if (!this.state.searchResults) {
      return (
        <div className="search-bar">
          <form>
            <input type="text" onChange={this.update("query")} value={this.state.query} />
            <span className="search-icon"><i className="fa fa-search fa-lg" aria-hidden="true"></i></span>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <div className="search-bar">
            <form>
              <input type="text" autoFocus={true} onChange={this.update("query")} value={this.state.query} />
              <span className="search-icon"><i className="fa fa-search fa-lg" aria-hidden="true"></i></span>
            </form>
          </div>
            {this.getProductList()}
        </div>
      );
    }
  }

}



export default Search;
