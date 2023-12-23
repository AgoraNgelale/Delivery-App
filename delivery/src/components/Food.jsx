import React, {useState}from 'react'
import {data} from '../Data/Data.js'

const Food = () => {
const [foods, setFoods] = useState(data)
  return (
    <div className='max-w-[1640px] m-auto px-4 py12'>
      <h1 className='text-orange-600 font-bold text-center'>Top Rated Menu Items</h1>
      
      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
              <button className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '>All</button>
              <button className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>Burgers</button>
              <button className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>Pizza</button>
              <button className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>Salad</button>
              <button className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600'>Chicken</button>
            </div>
        </div>

        {/* Filter Price */}
        <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '>$</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '>$$</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '>$$$</button>
                <button className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '>$$$$</button>
            </div>
        </div>
      </div>
      {/* Display foods */}
      <div>
       {foods.map((item,index)=>(
        <div key={index}>
            <img src={item.image} alt={item.name}/>
            <div>
                <p>{item.name}</p>
                <p>
                    <span>{item.price}</span>
                </p>
            </div>
        </div>
       ))}
      </div>
    </div>
  )
}

export default Food
