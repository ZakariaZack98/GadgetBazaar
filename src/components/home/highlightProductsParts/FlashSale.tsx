import ProductCardMini from '@/components/common/ProductCardMini';
import { useFetch } from '@/hooks/useFetch'
import { ProductType } from '@/types/product';
import React from 'react'

const FlashSale = async () => {
  //data fetching part with relevant queries
  const productData = await (await fetch(`https://dummyjson.com/products/?limit=3&skip=5`)).json()
  let productsList: ProductType[] | null = productData?.products;
  

  return (
    <div className='flex flex-col gap-4'>
      <h3 className='font-semibold text-deepblack leading-6'>FLASH SALE TODAY</h3>
      {
        productsList?.map(product => (
          <ProductCardMini product={product}/>
        ))
      }
    </div>
  )
}

export default FlashSale
