import React from 'react';


const GetFiftyOff = (props) => {
  if (props.price > 50) {
    return (
      <div className="get-fifty-off">
        <i className="fa fa-info" aria-hidden="true"></i>
        <span id="get-50">{`Get $50.00 off instantly: `}</span>
        <span>{` Pay $${Number(props.price - 50).toFixed(2)} upon approval for the Magazon Rewards Visa Card. `}</span>
          <a> Learn more</a>
      </div>
    )
  } else {
    return null;
  }
}

export default GetFiftyOff;
