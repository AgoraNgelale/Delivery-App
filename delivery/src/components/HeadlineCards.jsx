import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's out, BOGO's Out</p>
            <p className='px-2'>Through 9/26</p>
            <button 
            className='border-white bg-white text-black 
            absolute mx-2 bottom-4 hover:text-white hover:bg-orange-600 
            hover:scale-105 duration-300'
            >
              Order Now
            </button>
        </div>
        <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
        alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's out, BOGO's Out</p>
            <p className='px-2'>Through 9/26</p>
            <button className='border-white bg-white text-black absolute mx-2 bottom-4 hover:text-white hover:bg-orange-600 
            hover:scale-105 duration-300'>
              Order Now
            </button>
        </div>
        <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
        alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
            <p className='font-bold text-2xl px-2 pt-4'>Popular in Your Area</p>
            <p className='px-2'>Through 9/26</p>
            <button className='border-white bg-white text-black absolute mx-2 bottom-4 hover:text-white hover:bg-orange-600 
            hover:scale-105 duration-300'>
              Order Now
            </button>
        </div>
        <img className='max-h[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src='https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
        alt='/'
        />
      </div>
    </div>
  )
}

export default HeadlineCards
