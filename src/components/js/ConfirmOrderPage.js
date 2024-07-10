import React, {useContext, useEffect, useState} from 'react'
import ordercontext from '../../context/orderContext'
import ConfirmOrderSchema from './ConfirmOrderSchema';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function ConfirmOrderPage() {
  const navigate = useNavigate();
  const context = useContext(ordercontext)
  const {cart, dispatch} = context;
  const totalBill = cart.reduce((total, item) => total + item.foodPrice * item.quantity, 0);


  
  const finalPage = () => {
    navigate('/finalPage');
  }

//console.log(cart)
  return (
    <div className='confirmOrderContainer'>
        
        {cart.map((item, i) => {
            //console.log(item)
            return<ConfirmOrderSchema key={i} food={item}/>
        })}
        <hr/>
        Total Amount: Rs. {totalBill}
        <br/>
        <button onClick={finalPage}>PAY Now</button>
    </div>
  )
}

export default ConfirmOrderPage