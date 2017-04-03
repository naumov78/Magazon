import React from 'react';
import { withRouter, Link } from 'react-router';





const OrderDetails = (props) => {
  const posted = getDate(props.order.posted)
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

  function getStatusStyle() {
    switch (status) {
    case "Received":
      return "received-order"
    case "Pending":
      return "pending-order"
    case "Unshipped":
      return "unshipped-order"
    case "Shipped":
      return "shipped-order"
    case "Delivered":
      return "delivered-order"
    case "Canceled":
      return "canceled-order"
    default:
      return
    }
  }

  return (
    <div>
      <div><Link to={`/orders/${order_id}`}>Order #: {order_id * 6532497 + ' - ' + order_id * 165}</Link></div>
      <div>Posted: {posted}</div>
      <div>Status: <span className={getStatusStyle()}>{status}</span></div>
      <ul className="single-order-product-list">
        {products.map((product, i) => {
          return (
            <li key={i} className="single-order-product-line">
              <table className="">
                <tbody>
                  <tr className="">
                    <td className="product-title-descr">
                      <div className="order-list-product-image">
                        <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                          <img src={product.product_pictures[0].image_url} />
                        </Link>
                      </div>
                      <div className="cart-product-title">
                        <Link to={`/categories/${product.category_id}/products/${product.id}`} >
                          {product.title}
                        </Link>
                      </div>
                      <div className="product-cart-descr">
                        {product.brief_description}
                      </div>
                      <div className="product-cart-descr">
                        ${Number(product.price).toFixed(2)}<br />
                        Qty: {product.quantity}
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </li>
          )
        })}
      </ul>
      <div className="single-order-total">
        Order total: $ {props.order.total_amount}
      </div>
    </div>
  )
}

export default withRouter(OrderDetails);




// <tr>
//   <td>
//     <div>
//       Order total: $ {props.order.total_amount}
//     </div>
//   </td>
// </tr>
