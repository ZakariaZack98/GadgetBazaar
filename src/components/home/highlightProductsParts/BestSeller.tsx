import ProductCardMini from '@/components/common/ProductCardMini';
import { ProductType } from '@/types/product';
import React from 'react'

const BestSeller = async () => {
  //data fetching part with relevant queries
  const productData = await (await fetch(`https://dummyjson.com/products/category/laptops?limit=3`)).json()
  let productsList: ProductType[] | null = productData?.products;
  

  return (
    <div className='flex flex-col gap-4'>
      <h3 className='font-semibold text-deepblack leading-6'>BESTSELLER PRODUCTS</h3>
      {
        productsList?.map(product => (
          <ProductCardMini key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default BestSeller
