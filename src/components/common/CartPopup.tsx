import React from 'react'
import { cartProduct } from '../../../temp/sampleCartProduct'
import CartCardMini from './CartCardMini';
import { Button } from '../ui/button';

const CartPopup = () => {
  const prod = cartProduct;
  return (
    <div className='p-2'>
      <div className="flex gap-x-2 items-baseline">
        <p className='body-large-500 border-b border-gray-500 pb-2'>Shopping Cart</p>
        <p>(2)</p>
      </div>
      <div className="flex flex-col gap-3">
        <CartCardMini cartProduct={prod}/>
      <CartCardMini cartProduct={prod}/>
      <div className="flex items-center justify-between">
        <p className='text-gray-700'>Sub-total: </p>
        <p>171486 USD</p>
      </div>
      <div className="flex flex-col gap-2">
        <Button className='bg-accentOrange text-white'>Checkout Now</Button>
        <Button className='bg-white text-accentOrange border border-accentOrange '>View Cart</Button>
      </div>
      </div>
    </div>
  )
}

export default CartPopup
