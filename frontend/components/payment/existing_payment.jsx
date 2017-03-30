import React from 'react';

const ExistingPayment = (props) => {
  return (
    <div className="">
      <table className="payment-table">
        <tbody>
          <tr>
            <td id="place-order-num" className="placeorder-titles">2</td>
            <td id="place-order-title" className="placeorder-titles">Payment method</td>
            <td className="customer-info">
              <div>{`${props.currentUser.card_network.network} ending in ${props.currentUser.payment.card_number.slice(props.currentUser.payment.card_number.length - 4, props.currentUser.payment.card_number.length)}`}</div>
            </td>
            <td>
              <button>Change</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExistingPayment;
