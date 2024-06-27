import React from 'react'
import "../css/navbar.css"

function Navbar() {
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
            <p className='adminText'>User</p>
        </div>
    </div>
  )
}

export default Navbar