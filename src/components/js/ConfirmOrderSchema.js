import React from 'react'
import "../css/confirmorderschema.css"

function ConfirmOrderSchema(props) {
  return (
    <div className='ConfirmOrderSchemaContainer'>
            <h3><ul>
            <li >
              {props.food.foodName} - Rs. {props.food.foodPrice} x {props.food.quantity}
            </li>
            </ul></h3>
        {/* <h2>{props.food.foodName}</h2>
        <h4>{props.food.quantity}</h4>
        <h3>Price</h3> */}
    </div>
  )
}

export default ConfirmOrderSchema