import { categories } from '@/lib/Categories'
import React from 'react'
import CategoryCard from './CategoryCard';
import CardCarousel from '../common/CardCarousel';

const ShopByCategory = () => {
  const categoryData = categories;
  const cardCarouselProps: React.ReactNode[] = categoryData?.map(category => (
    <CategoryCard key={category._id} category={category}/>
  ))

  return (
    <div className='container mx-auto'>
      <div className="heading1 text-center">Shop by Categories</div>
      <div className="mt-10">
        <CardCarousel slides={cardCarouselProps}/>
      </div>
    </div>
  )
}

export default ShopByCategory
