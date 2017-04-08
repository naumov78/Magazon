import React from 'react';

const ShipTo = (props) => {

  function getUserName() {
    return (
      `${props.currentUser.first_name} ${props.currentUser.last_name}`
    );
  }


  return (
    <div className="ship-to">
      <div className="ship-to-title">Ship to:</div>
      <div className="ship-to-details">{`${getUserName()} - ${props.currentUser.address.city} - ${props.currentUser.address.zip}`}</div>
    </div>
  );
}

export default ShipTo;
