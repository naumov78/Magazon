import React from 'react';


const ShippingPrice = (props) => {
  if (props.price >= 50 && props.product) {
    return (
      <span className="free-shipping-product">{` & FREE Shipping`}</span>
    )
  } else if (props.price >= 50 && props.order) {
    return (
      <span className="free-shipping-order">{` + Free Shipping`}</span>
    )
  } else if (props.price < 50 && props.product) {
    return (
      <span className="free-shipping-order">{` + $5 shipping`}</span>
    )
  } else {
    return (
      <span className="free-shipping-order">{` + $5.00 shipping`}</span>
    )
  }
}

export default ShippingPrice;
