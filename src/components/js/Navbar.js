import React, { useContext, useEffect } from 'react'
import "../css/navbar.css"
import ordercontext from '../../context/orderContext'

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
            <input className='searchBarOfNavBar' type="text" placeholder='Search'/>
            <p>Order</p>
            <p className='chatText'>Chat</p>
            <p className='adminText'>{users? users.userName: 'User'}</p>
        </div>
    </div>
  )
}

export default Navbar