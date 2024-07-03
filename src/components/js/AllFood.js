import React, {useContext} from 'react'
import "../css/allfood.css"
import ordercontext from '../../context/orderContext'

function AllFood() {
  const context = useContext(ordercontext)
  const {allFood, getAllFood} = context
  return (
    <div className='allfoodContainer'>
        <div className='allfoodContainerTitle'>
            <h3>MENU</h3>
            <button>VEG</button>
            <button>NON-VEG</button>
            <button>Des</button>
            <button>NON-Des</button>

            {/* uses two data */}

        </div>
    </div>
  )
}

export default AllFood