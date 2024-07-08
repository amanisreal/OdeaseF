import React, {useContext, useEffect, useState} from 'react'
import "../css/allfood.css"
import ordercontext from '../../context/orderContext'
import DetailFoodItem from './DetailFoodItem'

function AllFood() {
  const context = useContext(ordercontext)
  const {getAllFoodItems, allFood} = context;

  const [search, setSearch] = useState('');

  const searchChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getAllFoodItems();
  }, [])

  return (
    <div className='allfoodContainer'>
        <div className='allfoodContainerTitle'>
            <h3>MENU</h3>
           

            {/* uses two data */}
            <input className='menuSearch' placeholder='search' value = {search} onChange={searchChange}/>
            
        </div>

        {allFood.filter((item) => {
          return search.toLowerCase() === ''? item : item.foodName.toLowerCase().includes(search.toLowerCase())
        }).map((item) => {
          return <DetailFoodItem title={item.foodName} description={item.foodDescription} price={item.foodPrice} key={item._id} id={item._id}/>
        })}
    </div>
  )
}

export default AllFood