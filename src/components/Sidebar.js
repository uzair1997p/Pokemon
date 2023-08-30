import React, { useEffect,useContext } from 'react';
//import link
import { Link } from 'react-router-dom';
//import icons
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';

//import components
import CartItem from '../components/CartItem';
//import sidebar context
import {SidebarContext} from '../contexts/SidebarContext';
//import cart context
import { CartContext } from '../contexts/CartContext';
import Checkout from './Checkout';

const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart , clearCart , total, itemAmount} = useContext(CartContext);
  
  return <div className={`${isOpen ? 'right-0' : '-right-full'
    }  w-full bg-white fixed top-0 h-full 
  shadow-2xl md:w-[35vW] xl:max-w-[30vw] transition-all 
  duration-300 z-20 px-4 lg:px-[35px]`}>

    <div className='flex items-center justify-between py-6
    border-b'>
      <div className='uppercase text-sm 
      font-semibold'> Shopping Bag ({itemAmount}) </div>
      {/* icon */}
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex
      justify-center items-center'>
        <IoMdArrowForward className='text-2xl'/>
      </div>
    </div>
    <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden'> {cart.map(item=>{
      return <CartItem item={item} key={item.id}/>})}
    </div>
    <div className='flex flex-col gap-y-3 py-4 mt-4' >
      <div className='flex w-full justify-between items-center'>
        {/**total */}
        <div className='uppercase font-semibold'>
          <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
        </div>
        {/**clar cart icon */}
        <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-x1'>
          <FiTrash2/>
        </div>
      </div>
      <Link to='/' className='bg-gray-200 flex p-4 justify-center 
      items-center text-primary w-full font-medium'>View cart</Link>
      <Checkout total = {{
                description: `${cart.map(item=>{
                  return(`[${item.name}...amount(${item.amount})],`) }) }`,
                amount: {
                  currency_code: "USD",
                  value: parseFloat(total).toFixed(2),
                },
              }}/>
    </div>
    </div>;
};

export default Sidebar;
