import React from 'react';
import { Link, withRouter } from 'react-router';


const BoughtTogether = (props) => {
  if (props.product.bought_together.length > 0) {
    return (
      <div>
        <p>Frequently bought together</p>
        <ul className="bought-together-list">
          {props.product.bought_together.map((product, i) => {
            return (
              <li key={i} className="single-product-block">
                <div className="bought-together">
                  <div className="bt-product">
                    <Link to={`/categories/${product.category_id}/products/${product.id}`}>
                      <img width="150" height="150" src={product.product_pictures[0].image_url} />
                      <span>{product.title}</span>
                    </Link>
                  </div>
                  <div>
                      <span className="bought-together-price">${Number(product.price).toFixed(2)}</span>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  } else {
    return null;
  }
}


export default withRouter(BoughtTogether);
