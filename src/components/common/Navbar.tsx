'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Icons } from '@/lib/icons';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='py-5 bg-accentBlue text-white'>
      <div className='container mx-auto grid grid-cols-12 items-center'>
        <div className="logo col-span-3">
          <h4 className='font-inter font-bold text-2xl'>GadgetBazaar</h4>
        </div>
        <div className="searchArea col-span-6">
          <Input placeholder='Search for anything' className='text-gray-700 rounded-none bg-white body-small-400 py-3.5 px-5 h-12 w-full' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        </div>
        <div className="userSec col-span-3 flex items-center justify-end text-3xl gap-x-6 ">
          <div className="cart relative cursor-pointer">
            <span className='absolute -top-1 -right-2 border border-accentBlue h-5 w-5 rounded-full text-xs bg-white text-accentBlue flex justify-center items-center'>2</span>
            <span><Icons.cart/></span>
          </div>
          <div className="wishlist relative cursor-pointer">
            <span className='absolute -top-1 -right-2 border border-accentBlue h-5 w-5 rounded-full text-xs bg-white text-accentBlue flex justify-center items-center'>2</span>
            <span><Icons.wishlist/></span>
          </div>
          <div className="profile cursor-pointer">
            <span><Icons.user/></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
