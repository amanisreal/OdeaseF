import React, { useState, useContext, useEffect } from 'react'
import "../css/navbar.css"
import ordercontext from '../../context/orderContext'
import { Link } from 'react-router-dom';

function Navbar() {  
  // const context = useContext(chatContext)
  // const {currUser, getCurrUser} = context
  const context = useContext(ordercontext)
  const {users, gettCurrUser, cart} = context;

  useEffect(() => {
    gettCurrUser();
   // console.log(users)
  }, [])

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cart]);


  return (
    <div className='navbarContainer'>
        <div  className='navBarLeft'>
            <img src=""/>
        </div>

        <div className='navBarMiddle'>

        </div>

        <div className='navBarRight'>
            <p><Link to='/yourOrder'> <div className={`cart-icon ${animate ? 'animated' : ''}`}>
        🛒 Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
      </div></Link></p>
            <p className='chatText'>Chat</p>
            <p className='adminText'>{users? users.userName: 'User'}</p>
        </div>
    </div>
  )
}

export default Navbar