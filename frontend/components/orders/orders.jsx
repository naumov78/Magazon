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
        <ul>
          {orders.map((order, i) => {
            return (
              <li key={i} className="single-order-block">
                <OrderDetails order={order} />
                <p>-------- order end ---------</p>
              </li>
            )
          })}
        </ul>
      )


    } else {
      return null;
    }
  }


  render() {
    debugger
    return <div>{this.getAllOrders()}</div>
  }


}

export default withRouter(Orders);
