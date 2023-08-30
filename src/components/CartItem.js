import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdClose, IoMdRemove , IoMdAdd} from 'react-icons/io'
import { CartContext} from '../contexts/CartContext';
const CartItem = ({item}) => {
  const {removeFromCart, increaseAmount , decreaseAmount} = useContext(CartContext)
  // desctructure item
  const {id , image : {url} , name , price: { raw } , amount} = item;
  return <div className='flex gap-x-4 py-2 lg-px-6 border-b border-gray-200 w-fulll font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center'>
    { /**image */}
      <Link to={`/product/${id}`}>
          <img className='max-w-[80px] 'src={url} alt=''/>
      </Link>
      <div className='w-full flex flex-col'>
        {/**item and remove icon */}
        <div className='flex justify-between mb-2'>
           {/**title */}
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primar hover:underline'>{name}</Link>
          {/**remove icon */}
          <div onClick={()=> removeFromCart(id)} className='texxt-x1 cursor-pointer'>
            <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
          </div>
        </div>
        <div className='flex gap-x-2 h-[360x] text-sm'>
            {/**qty */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border-4 text-primary font-medium'>
              {/**minus icon */}
              <div onClick={()=> decreaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer h-full'>
                <IoMdRemove />
              </div>
              {/**amount */}
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>
              {/**plus icon */}
              <div onClick={()=> increaseAmount(id)} className='flex-1 h-flex flex justify-center items-center cursor-pointer h-full'>
                <IoMdAdd />
              </div>
            </div>
            {/**item price */}
            <div className='flex-1 flex items-center justify-around'>${raw}</div>
            {/**prinal price */}
             {/**price at 2 decimal*/}
            <div className='flex-1 flex justify-end items-center text-parimary font-medium'>{`$ ${parseFloat(raw * amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
