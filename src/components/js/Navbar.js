import React, { useContext, useEffect } from 'react'
import "../css/navbar.css"
import ordercontext from '../../context/orderContext'
import { Link } from 'react-router-dom';

function Navbar() {  
  // const context = useContext(chatContext)
  // const {currUser, getCurrUser} = context
  const context = useContext(ordercontext)
  const {users, gettCurrUser} = context;

  useEffect(() => {
    gettCurrUser();
    console.log(users)
  }, [])

  return (
    <div className='navbarContainer'>
        <div  className='navBarLeft'>
            <img src=""/>
        </div>

        <div className='navBarMiddle'>

        </div>

        <div className='navBarRight'>
            <p><Link to='/yourOrder'>Order</Link></p>
            <p className='chatText'>Chat</p>
            <p className='adminText'>{users? users.userName: 'User'}</p>
        </div>
    </div>
  )
}

export default Navbar