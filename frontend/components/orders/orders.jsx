import React from 'react';
import { withRouter, Link } from 'react-router';
import OrderDetails from './OrderDetails';


class Orders extends React.Component {

  constructor(props) {
    super(props);
    this.state = { orders: [], empty: false }
  }

  componentWillMount() {
    this.props.fetchAllOrders().then((result) => {
      if (result.orders.length === 0) {
        this.setState({ empty: true })
      } else {
        this.setState({ orders: result.orders })
      }
    })
  }


  getAllOrders() {
    const orders = this.state.orders
    return (
      <div className="order-list-container">
        <span className="order-list-title"><h2>Your Orders</h2></span>
        <ul className="orders-list">

          {orders.map((order, i) => {
            return (
              <li key={i}>
                <OrderDetails order={order} currentUser={this.props.currentUser} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }


  render() {

    if (!this.state.empty && this.state.orders.length === 0) {
      return (
      <div className="loading-page">
        <div>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
      </div>
      );
    } else if (this.state.empty) {
      return (
        <div> You have no orders </div>
      );
    } else if (this.state.orders.length > 0) {
      return <div>{this.getAllOrders()}</div>
    }
  }


}

export default withRouter(Orders);
