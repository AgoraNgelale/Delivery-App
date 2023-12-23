import React,{useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag} from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends, FaWallet} from 'react-icons/fa';
import {MdFavorite, MdHelp} from 'react-icons/md';

const Navbar = () => {
  const [nav,setNav] = useState(false)
  const [delivery,setDelivery] = useState(false)
  return (
    <div className='max-w-[1640] mx-auto flex justify-between items-center p-4'>
        {/*Left Side*/}
        <div className='flex items-center'>
          {/* Menu Icon */}
           <div className='cursor-pointer' onClick={()=>setNav(true)} >
             <AiOutlineMenu  size={30}/>
           </div>
           <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
           </h1>
           <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className={delivery? 'bg-black p-2 text-white rounded-full cursor-pointer':'p-2 cursor-pointer'} onClick={()=>setDelivery(true)} >Delivery</p>
                <p className={delivery?'p-2 cursor-pointer' : 'bg-black p-2 text-white rounded-full cursor-pointer'}onClick={()=>setDelivery(false)}>Pickup</p>
           </div>
        </div>
        {/**Search Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
          <AiOutlineSearch size={25}/>
          <input className='bg-transparent p-2 w-full' 
          type='text' 
          placeholder="Search Foods"
          />
        </div>
        {/**Shopping Cart Button */}
        <button className='bg-black text-white hidden md:flex 
        items-center py-2 rounded-full'>
          <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>
        {/**Mobile menu */}

        {/* Overlay AKA the darkness that falls on the rest of the screen when menu is toggled*/}
        {nav?<div className='bg-black/80 fixed w-full h-screen z-10 top-0
         left-0'></div>:''}

          {/* Side drawer menu AKA white menu hat pops up when mobile menu is toggled*/}
          <div className= {nav? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose size={30} className='absolute right-4 top-4
             cursor-pointer' onClick={()=>setNav(false)}/>
             <h2 className='text-2xl p-4'>
              Best <span className='font-bold'>Eats</span>
              </h2>
              {/* Navigation Buttons */}
              <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                  <li className='text-xl py-4 flex'>
                    <TbTruckDelivery size={25} className='mr-4' />
                    Orders
                  </li>
                  <li className='text-xl py-4 flex'>
                    <MdFavorite size={25} className='mr-4' />
                    Favorites
                  </li>
                  <li className='text-xl py-4 flex'>
                    <FaWallet size={25} className='mr-4' />
                    Wallet
                  </li>
                  <li className='text-xl py-4 flex'>
                    <MdHelp size={25} className='mr-4' />
                    Help
                  </li>
                  <li className='text-xl py-4 flex'>
                    <AiFillTag size={25} className='mr-4' />
                    Promotions
                  </li>
                  <li className='text-xl py-4 flex'>
                    <BsFillSaveFill size={25} className='mr-4' />
                    Best Ones
                  </li>
                  <li className='text-xl py-4 flex'>
                    <FaUserFriends size={25} className='mr-4' />
                    Invite Friends
                  </li>
                </ul>
              </nav>
              {/* End of Navigation Buttons */}
          </div>
    </div>
  )
}

export default Navbar
