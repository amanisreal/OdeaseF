import React, { useState, useContext } from 'react'
import "../css/detailFood.css"
import ordercontext from '../../context/orderContext'

function DetailFoodItem(props) {
    const context = useContext(ordercontext)
    const {cart, dispatch} = context;
    const cartItem = (id) => {
        cart.find(cartItem => cartItem.id === id);
    }
    
    const[count, setCount] = useState(0);

    const handleAddToCart = () => {
        let a = count;
        a++;
        setCount(a);
        dispatch({ type: 'ADD_TO_CART', payload: props.item });
        //console.log(cart);
      };
    
      const handleRemoveFromCart = () => {
        let a = count;
        a--;
        setCount(a);
        dispatch({ type: 'REMOVE_FROM_CART', payload: props.item });
      };
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
                <button disabled={!count} className='commonButtonAdd' onClick={handleRemoveFromCart}>-</button>
                <p>{cartItem(props.id) && <p>Quantity in cart: {cartItem(props.id).quantity}</p>}</p>
                <button className='commonButtonAdd' onClick={handleAddToCart}>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailFoodItem