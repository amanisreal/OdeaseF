import React, {useContext, useEffect, useState} from 'react'
import ordercontext from '../../context/orderContext'
import ConfirmOrderSchema from './ConfirmOrderSchema';

function ConfirmOrderPage() {
    const context = useContext(ordercontext)
    const {currOrder} = context;

  return (
    <div className='confirmOrderContainer'>
        {currOrder.map((item, i) => {
            console.log(item)
            if(item.id) return<ConfirmOrderSchema key={i} food={item}/>
        })}
    </div>
  )
}

export default ConfirmOrderPage