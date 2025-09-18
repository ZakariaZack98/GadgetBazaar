import { Icons } from '@/lib/icons';
import { CartProductType } from '@/types/cartProduct';
import Link from 'next/link';
import React from 'react'

interface ProductCardMiniPropsType {
  cartProduct: CartProductType;
}

const CartCardMini = ({cartProduct}: ProductCardMiniPropsType) => {
  const {id, title, price, thumbnail, quantity, discountedTotal} = cartProduct;
  return (
    <Link href={`/products/${id}`} className='relative'>
      <span className='absolute right-3 top-1/2 -translate-y-[50%]'><Icons.close/></span>
      <div className='p-3 border-2 border-gray-300 flex gap-x-3 items-center duration-200 hover:shadow-lg'>
      {/* ========== thumbnail picture ============= */}
      <picture className='w-20 h-20 aspect-square'>
        <img src={thumbnail} alt={`thumbnail_picture_of_${title}`} className=' object-cover object-center'/>
      </picture>
      {/* =========== title and price ============== */}
      <div className="flex flex-col gap-y-2">
        <p className='body-medium-400 line-clamp-2'>{title}</p>
        <div className="flex gap-x-1 items-baseline">
          <span>{quantity} x </span>
          <p className='text-blue-500 body-medium-400'>${Math.floor(discountedTotal)}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CartCardMini
