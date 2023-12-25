import React, {useState}from 'react'
import {data} from '../Data/Data.js'

const Food = () => {
  // Filter food type
  const filterType = (category) =>{
    setFoods(
      data.filter((item)=>{
        return item.category === category;
      })
    )
  }
  // Filter food type
  const filterPrice = (price) =>{
    setFoods(
      data.filter((item)=>{
        return item.price === price;
      })
    )
  }
const [filterAll, setFilterAll] = useState(false)
const [filterBurger, setFilterBurger] = useState(false)
const [filterPizza, setFilterPizza] = useState(false)
const [filterSalad, setFilterSalad] = useState(false)
const [filterChicken, setFilterChicken] = useState(false)
const [foods, setFoods] = useState(data)
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
              <button onClick={()=>{setFoods(data); setFilterAll(!filterAll)}}
              className={filterAll? 'm-1 border-orange-600 text-white bg-orange-600': 'm-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '}>All</button>
              <button onClick={()=>{filterType('burger'); setFilterBurger(!filterBurger)}}  
              className={filterBurger? 'm-1 border-orange-600 text-white bg-orange-600': 'm-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '}>Burgers</button>
              <button onClick={()=>{filterType('pizza'); setFilterPizza(!filterPizza)}} 
               className={filterPizza? 'm-1 border-orange-600 text-white bg-orange-600': 'm-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '}>Pizza</button>
              <button onClick={()=>{filterType('salad'); setFilterSalad(!filterSalad)}} 
               className={filterSalad? 'm-1 border-orange-600 text-white bg-orange-600': 'm-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '}>Salad</button>
              <button onClick={()=>{filterType('chicken'); setFilterChicken(!filterChicken)}} 
               className={filterChicken? 'm-1 border-orange-600 text-white bg-orange-600': 'm-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '}>Chicken</button>
            </div>
        </div>

        {/* Filter Price */}
        <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={()=>filterPrice('$')}
                className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '
                >$</button>
                <button onClick={()=>filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '>$$</button>
                <button onClick={()=>filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '>$$$</button>
                <button onClick={()=>filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 '>$$$$</button>
            </div>
        </div>
      </div>
      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {/* Food Cards */}
       {foods.map((item,index)=>(
        <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} 
            className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                    <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                </p>
            </div>
        </div>
       ))}
      </div>
    </div>
  )
}

export default Food
