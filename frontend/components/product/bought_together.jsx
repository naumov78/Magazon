import React from 'react'


const BoughtTogether = (props) => {

  return (
    <div>
      <ul>
        {props.product.bought_together.map((product, i) => {
          return (
            <li key={i}>
              <div>
                <img width="150" height="150" src={product.product_pictures[0].image_url} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )

}


export default BoughtTogether;
