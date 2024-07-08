import React from 'react'
import Navbar from './Navbar'
import TodaysSpecial from './TodaysSpecial'
import AllFood from './AllFood'
import "../css/home.css"

function Home() {
  return (
    <div className='homeContainer'>
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
  )
}

export default Home