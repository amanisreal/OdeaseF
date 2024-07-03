import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminHome() {
    const navigate = useNavigate();
    const addItem = () => {
        navigate('/addItem');
    }

    const updateItem = () => {
        navigate('/allItems');
    }

    const deleteItm = () => {
        navigate('/allItems')
    }

    const todaysSpecial = () => {
        
    }
  return (
    <div className='adminHomeContainer'>
        <button className='editTodaysSpecialMenu'>Edit today's special Menu</button>
        <button className='addFoodItemButton' onClick={addItem}>Add food item</button>
        <button className='updateFoodItemButton'>Update food item</button>
        <button className='deleteFoodItemButton'>Delete food item</button>
    </div>
  )
}

export default AdminHome