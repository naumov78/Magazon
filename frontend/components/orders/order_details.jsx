import React from 'react';
import { withRouter, Link } from 'react-router';





const OrderDetails = (props) => {
  const posted = getDate(props.order.posted)
  const updated = getDate(props.order.updated)
  const order_id = props.order.order_id
  const total_amount = props.order.total_amount
  const status = props.order.status
  const products = props.order.products

  function getDate(posted) {
      const date = new Date(posted);
      let monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      debugger
      const Mon = monthNames[date.getMonth()];
      const Day = date.getDate();
      const Yr = 1900 + date.getYear();
      return `${Mon} ${Day}, ${Yr}`
  }


  return (
    <div>
      <div>Order #: {order_id * 6532497 + ' - ' + order_id * 165}</div>
      <div>Posted: {posted}</div>
      <div>Status: {status}</div>
      <div>Last updated: {updated}</div>
      <ul>
        {products.map((product, i) => {
          return (
            <li key={i} className="cart-product-line">
              <table className="single-product-in-cart">
                <tbody>
                  <tr className="cart-product">
                    <td>
                      <div className="cart-product-title">
                        <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                          {product.title}
                        </Link>
                      </div>
                      <div className="product-cart-descr">
                        {product.brief_description}
                      </div>
                    </td>
                    <td className="cart-product-price">
                      ${Number(product.price).toFixed(2)}
                    </td>
                    <td className="cart-product-quantity">
                      {product.quantity}
                    </td>
                    <td className="cart-product-total">
                      ${product.total_price.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default withRouter(OrderDetails);
