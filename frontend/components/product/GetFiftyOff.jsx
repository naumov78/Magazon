import React from 'react';


function getContent(props) {
  return (
    <div className="get-fifty-off">
      <i className="fa fa-info" aria-hidden="true"></i>
      <span id="get-50">{`Get $50.00 off instantly: `}</span>
      <span>{` Pay $${Number(props.price - 50).toFixed(2)} upon approval for the Magazon Rewards Visa Card. `}</span>
        <a> Learn more</a>
    </div>
  );
}

const GetFiftyOff = (props) => {
  return props.price > 50 ? getContent(props) : null;
}

export default GetFiftyOff;
