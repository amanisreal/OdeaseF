import React, { useState, useContext } from 'react'
import "../css/detailFood.css"
import ordercontext from '../../context/orderContext'

function DetailFoodItem(props) {
    const context = useContext(ordercontext)
    const {addToOrder, deleteFromOrder} = context;
    const[count, setCount] = useState(0);

    const minusClicked = () => {
        let c = count;
        c--;
        setCount(c);
        deleteFromOrder(props)
    }

    const plusClicked = () => {
        let c = count;
        c++;
        setCount(c);
        addToOrder(props)
    }
  return (
    <div className='detailFooditemContainer'>
        <div className='leftSide'>
            Image
        </div>

        <div className='rightSide'>
            <div className='headerSection'>
                <h2 className='title'>{props.title}</h2>
                <div className='priceSection'>Rs. {props.price}</div>
            </div>
            <hr/>
            <div className='descriptionSection'>
                {props.description}
                <div className='addItem'>
                <button className='commonButtonAdd' onClick={minusClicked}>-</button>
                <p>{count}</p>
                <button className='commonButtonAdd' onClick={plusClicked}>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailFoodItem