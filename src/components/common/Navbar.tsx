'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Icons } from '@/lib/icons';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import LoginPopup from './LoginPopup';
import CartPopup from './CartPopup';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputType, setInputType] = useState<string>('text')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputType('search');
    setSearchTerm(e.target.value);
  }

  return (
    <div className='py-5 bg-accentBlue text-white'>
      <div className='container mx-auto grid grid-cols-12 items-center'>
        {/* ================================ Logo ================================= */}
        <div className="logo col-span-3">
          <h4 className='font-inter font-bold text-2xl'>GadgetBazaar</h4>
        </div>
        {/* ============================== Searchbar ============================ */}
        <div className="searchArea col-span-6 relative">
          <Input type={inputType} placeholder='Search for anything' className='text-gray-700 rounded-none bg-white body-small-400 py-3.5 ps-5 pe-15 h-12 w-full' value={searchTerm} onChange={e => handleInput(e)}/>
          <span className='absolute right-4 top-1/2 -translate-y-1/2 z-50 text-gray-700 text-xl'>
            {searchTerm.length === 0 ? <Icons.search/> : <Icons.close onClick={() => setSearchTerm('')}/>}
          </span>
        </div>
        {/* ======================== Cart, wishlist, profile ======================= */}
        <div className="col-span-3 flex items-center justify-end text-3xl gap-x-6 ">
          {/* ============ cart popup ============= */}
          <Popover>
            <PopoverTrigger asChild>
              <div className="cart relative cursor-pointer">
                <span className='absolute -top-1 -right-2 border border-accentBlue h-5 w-5 rounded-full text-xs bg-white text-accentBlue flex justify-center items-center'>2</span>
                <span><Icons.cart/></span>
              </div>
            </PopoverTrigger>
            <PopoverContent className='w-104' side='bottom' align='end'>
              <CartPopup/>
            </PopoverContent>
          </Popover>
          <div className="wishlist relative cursor-pointer">
            <span className='absolute -top-1 -right-2 border border-accentBlue h-5 w-5 rounded-full text-xs bg-white text-accentBlue flex justify-center items-center'>2</span>
            <span><Icons.wishlist/></span>
          </div>
          {/* ============ user popup ============= */}
          <Popover>
            <PopoverTrigger asChild>
              <div className="profile cursor-pointer">
                <span><Icons.user/></span>
              </div>
            </PopoverTrigger>
            <PopoverContent className='w-106' side='bottom' align='end'>
                <LoginPopup/>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default Navbar
