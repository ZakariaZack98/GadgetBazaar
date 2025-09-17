import { ProductType } from '@/types/product'
import Link from 'next/link';
import React from 'react'

interface ProductCardMiniPropsType {
  product: ProductType;
}

const ProductCardMini = ({product}: ProductCardMiniPropsType) => {
  const {id, title, price, images, category, discountPercentage} = product;
  return (
    <Link href={`/category/${category}/${id}`}>
      <div className='p-3 border-2 border-gray-300 flex gap-x-3 items-center duration-200 hover:shadow-lg'>
      {/* ========== thumbnail picture ============= */}
      <picture className='w-20 h-20'>
        <img src={images[0]} alt={`thumbnail_pocture_of_${title}`} className=' object-cover object-center'/>
      </picture>
      {/* =========== title and price ============== */}
      <div className="flex flex-col gap-y-2">
        <p className='body-medium-400 line-clamp-2'>{title}</p>
        <p className='text-blue-500 body-medium-400'>${price}</p>
      </div>
    </div>
    </Link>
  )
}

export default ProductCardMini
