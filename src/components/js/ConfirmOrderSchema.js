import React from 'react'
import "../css/confirmorderschema.css"

function ConfirmOrderSchema(props) {
  return (
    <div className='ConfirmOrderSchemaContainer'>
        <h2>{props.food.foodName}</h2>
        <h4>x2</h4>
        <h3>Price</h3>
    </div>
  )
}

export default ConfirmOrderSchema