import React from 'react';
import { withRouter, Link } from 'react-router';

const OrderDetails = (props) => {
  debugger
  return (
    <div>{props.order.order_id}</div>
  )
}

export default withRouter(OrderDetails);
