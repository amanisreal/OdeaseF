import React from 'react'
import "../css/itemcard.css"

function ItemCard(props) {
  return (
    <div className='itemCardContainer'>
        <div className='imgConatiner'>
            <img id='foodImage' src={props.image}/>
        </div>

        <div className='contentContainer'>
            {props.text}
        </div>
    </div>
  )
}

export default ItemCard;