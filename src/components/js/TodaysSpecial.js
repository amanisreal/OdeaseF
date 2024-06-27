import React from 'react'
import ItemCard from './ItemCard'
import "../css/todaysSpecial.css"
import imageURL from "../images/5616967.jpg"

function TodaysSpecial() {
  return (
    <div className='todaysSpecialContainer' id="todaysSpecialContainer">
        <h2 className='todaysSpecialText'>Today's Special</h2>
        
        <div className='todaysSpecialCardContainer'>
          <div class="grid-container">
          <div class="grid-item">
        <ItemCard image={imageURL} text={"New Food"}/></div>
          <div class="grid-item">
        <ItemCard image={imageURL} text={"New Food"}/></div>
          <div class="grid-item">
        <ItemCard image={imageURL} text={"New Food"}/></div>
          <div class="grid-item">
        <ItemCard image={imageURL} text={"New Food"}/></div>
          <div class="grid-item">
        <ItemCard image={imageURL} text={"New Food"}/></div>
          <div class="grid-item">
        <ItemCard image={imageURL} text={"New Food"}/></div>
          
        </div>
        </div>
    </div>
  )
}

export default TodaysSpecial