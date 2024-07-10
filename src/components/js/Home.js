import React from 'react'
import Navbar from './Navbar'
import TodaysSpecial from './TodaysSpecial'
import AllFood from './AllFood'
import "../css/home.css"
import ConfirmOrderPage from './ConfirmOrderPage'

function Home() {
  return (
    <div className='homeContainer'>
        <div className='leftSide'>
        <div className='navBarSection'>
            <Navbar/>
        </div>

        <div className='todaysSpecialContainer'>
          <TodaysSpecial/>
        </div>
        
        <div className='menuContainer'>
          <AllFood/>
        </div>

        <div className='footerContainer'>

        </div>
        </div>

        <div className='rightSide'>
          <ConfirmOrderPage/>
        </div>

    </div>
  )
}

export default Home