import React from 'react'

function FoodItemShow(props) {
  return (
    <div className='foodItemShowContainer'>
        <h3>{props.foodName}</h3>
        <p>{props.description}</p>
        <button>Update</button>
        <button>Delete</button>
    </div>
  )
}

export default FoodItemShow