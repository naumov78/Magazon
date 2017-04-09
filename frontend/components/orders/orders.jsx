import React from 'react';
import { withRouter, Link } from 'react-router';
import OrderDetails from './order_details';


class Orders extends React.Component {

  constructor(props) {
    super(props);
    this.state = { orders: [] }
  }

  componentWillMount() {
    debugger
    this.props.fetchAllOrders().then((result) => {
      debugger
      this.setState({ orders: result.orders })
    })
  }

  componentDidMount() {
    debugger
  }

  getAllOrders() {
    if (this.state.orders.length !== 0) {
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


    } else {
      return <div className="loading-page">
        <div>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
      </div>;
    }
  }


  render() {
    debugger
    return <div>{this.getAllOrders()}</div>
  }


}

export default withRouter(Orders);
