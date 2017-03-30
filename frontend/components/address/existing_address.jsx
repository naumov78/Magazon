import React from 'react';

const ExistingAddress = (props) => {
  return (
    <div>
      <table className="address-table">
        <tbody>
          <tr>
            <td id="place-order-num" className="placeorder-titles">1</td>
            <td id="place-order-title" className="placeorder-titles">Shipping address</td>
            <td className="customer-info">
              <div>{`${props.currentUser.first_name}  ${props.currentUser.last_name}`}</div>
              <div>{`${props.currentUser.address.street} ${props.currentUser.address.street2}`}</div>
              <div>{`${props.currentUser.address.city}, ${props.currentUser.state.state}, ${props.currentUser.address.zip}`}</div>
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

export default ExistingAddress;
